import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAccount, useBalance, useWaitForTransactionReceipt } from "wagmi";
import {
  simulateContractLB,
  viewLaunchpad,
  viewUSDT,
  writeTransactionLaunchpad,
  writeTransactionUSDT,
} from "../../../../contracts/contractUtils";
import {
  ADDRESS_ZERO,
  MAX_UINT256,
  NFT_CONTRACT_DATA_ADDRESS,
  USDT_ADDRESS,
} from "../../../../contracts/constants";
const { TABLET_DEVICE } = DeviceSizes;

import { BaseError, slice } from "viem";
import toast from "react-hot-toast";
import BigNumber from "bignumber.js";
import { DeviceSizes } from "../../../../shared/const/DeviceSizes";
import { fetchListInvestByUser } from "../../../../utils/api/apis";
import { changeDate, formatTimestamp } from "../../../../utils/function";

const StyledDepositContainer = styled.div`
  max-width: 1440px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  gap: 32px;
  border-radius: 16px;
  background: radial-gradient(
    122.44% 260.07% at 0% 0%,
    rgba(241, 149, 37, 0.288) 0%,
    rgba(241, 149, 37, 0) 50%
  );
  border: 1px solid rgba(241, 149, 38, 0.24);
`;

const StyledTitleDepositContainer = styled.div`
  padding: 32px 0px;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const StyledTitleLeft = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;
  color: rgba(251, 254, 255, 1);
`;

const StyledTitleRight = styled.div`
  border-radius: 4px;
  padding-top: 6px;
  padding-right: 12px;
  padding-bottom: 6px;
  padding-left: 12px;
  gap: 10px;
  /* background: rgba(227, 236, 255, 0.16); */

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: rgba(192, 192, 205, 1);
`;

const StyledMainContentContainer = styled.div`
  padding: 0px 12px;

  @media (${TABLET_DEVICE}) {
    padding: 0px 120px;
  }
`;

const StyledMainContainerBorder = styled.div`
  border-radius: 16px;
  border: 1px solid rgba(48, 48, 48, 1);
  width: 100%;
  background-color: rgba(227, 236, 255, 0.06);
`;

const StyleMainContentHead = styled.div`
  border-bottom: 1px solid rgba(48, 48, 48, 1);
  padding: 12px 16px;
  gap: 12px;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  @media (${TABLET_DEVICE}) {
    flex-direction: row;
    padding: 24px 32px;
    gap: 24px;
  }
`;

const StyledCardMainContentHeadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (${TABLET_DEVICE}) {
    width: 280px;
  }
`;

const StyledItemCardMainContentHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const StyledTextWhite = styled.div<{ size?: string }>`
  font-weight: 700;
  font-size: ${({ size }) => size || "14px"};
  line-height: 20px;
  letter-spacing: 0%;
  text-align: right;
  color: rgba(251, 254, 255, 1);
`;

const StyledTextGray = styled.div<{ size?: string }>`
  font-weight: 500;
  font-size: ${({ size }) => size || "14px"};
  line-height: 100%;
  letter-spacing: 0%;
  color: rgba(139, 141, 147, 1);
`;

const StyleLine = styled.div<{ size?: string }>`
  height: ${({ size }) => size || "52px"};
  width: 1px;
  background-color: rgba(73, 73, 77, 0.48);
  display: none;
  @media (${TABLET_DEVICE}) {
    display: block;
  }
`;

const StyledBodyMainContentContainer = styled.div`
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (${TABLET_DEVICE}) {
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 16px;
    padding-left: 32px;
  }
`;

const StyledBodyMainContentTextEndIn = styled.div`
  width: 100%;
  border-radius: 4px;
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
  gap: 16px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(35, 61, 153, 0.1) 98.93%
  );
  position: relative;
  z-index: 2;
`;

const StyledBodyMainContentTextEndInFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 16px;
  position: relative;
  z-index: 2;
`;

const StyledBodyMainContentTextEndInBlur = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  backdrop-filter: blur(20px);
  z-index: 1;
`;

const StyleDisplayInformationCurrent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 12px;
  /* padding-right: 24px; */
  padding-bottom: 12px;
  /* padding-left: 24px; */
`;

const StyledButtonDeposit = styled.button`
  background: rgba(248, 248, 248, 1);
  width: 100%;
  border-radius: 8px;
  padding-top: 12px;
  padding-right: 48px;
  padding-bottom: 12px;
  padding-left: 48px;

  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  color: rgba(8, 6, 18, 1);
`;

const StyledTextWaring = styled.p`
  color: #dc3545;
  font-size: 14px;
  text-align: center;
  margin: 0px;
`;

const StyleComponentFlexBetween = styled.div<{ gap?: string }>`
  gap: ${({ gap }) => gap || "0px"};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMinMax = styled.div`
  border: 1px solid rgba(73, 73, 77, 0.48);
  padding-top: 6px;
  padding-right: 12px;
  padding-bottom: 6px;
  padding-left: 12px;
  border-radius: 12px;
  border-width: 1px;

  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
`;

const StyledCardInvitationLink = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-radius: 12px;
  border: 0.6px solid rgba(73, 73, 77, 0.48);
  background: rgba(227, 236, 255, 0.06);
`;
const StyledIconInvitationLink = styled.div`
  border-radius: 12px;
  padding: 10px 16px;
  border: 1.18px solid rgba(73, 73, 77, 0.48);
  background: rgba(227, 236, 255, 0.06);
  cursor: pointer;
`;

function Deposit() {
  const { address: userAddress } = useAccount();
  const [usdtAllowance, setUSDTAllowance] = useState<bigint>(0n);
  const [fetching, setFetching] = useState(false);
  const [refAddress, setRefAddress] = useState<string>("");
  const [startTime, setStartTime] = useState(0);
  // const [endTime, setEndTime] = useState(0);

  const [refContract, setRefContract] = useState("");
  const refFromContract =
    refContract.toLowerCase() === ADDRESS_ZERO.toLowerCase()
      ? null
      : refContract;
  const [minInvest, setMinInvest] = useState(0);
  const [maxInvest, setMaxInvest] = useState(0);

  // const [userIsBought, setUserIsBought] = useState<boolean>(false);
  // const [refIsBought, setRefIsBought] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const { data: usdtBalance } = useBalance({
    address: userAddress,
    token: USDT_ADDRESS,
  });

  console.log("usdtBalance", usdtBalance);
  const finalizeRef = refFromContract || refAddress;

  useEffect(() => {
    const walletAddressFromStorage = localStorage.getItem("ref");
    if (walletAddressFromStorage !== null) {
      setRefAddress(walletAddressFromStorage);
    }
  }, [userAddress, refAddress]);
  useEffect(() => {
    const walletAddressFromStorage = localStorage.getItem("ref");
    if (walletAddressFromStorage !== null) {
      setRefAddress(walletAddressFromStorage);
    }
  });

  const fetchData = async () => {
    const getMinInvest: any = await viewLaunchpad("getMinInvestment", []);
    setMinInvest(Math.ceil(Number(getMinInvest) / 1e18));

    const getMaxInvest: any = await viewLaunchpad("getMaxInvestment", []);
    setMaxInvest(Math.ceil(Number(getMaxInvest) / 1e18));

    const getStartTime: any = await viewLaunchpad(
      "getStartTimeForLaunchpad",
      []
    );
    setStartTime(Number(getStartTime));
    // const getEndTime: any = await viewLaunchpad("getEndTimeForLaunchpad", []);
    // setEndTime(Number(getEndTime));

    console.log("startTime", startTime);

    if (userAddress) {
      const getUSDTAllowance: any = await viewUSDT("allowance", [
        userAddress,
        NFT_CONTRACT_DATA_ADDRESS,
      ]);
      setUSDTAllowance(getUSDTAllowance);

      const getRefContract: any = await viewLaunchpad("getRef", [userAddress]);
      setRefContract(getRefContract);
    }
  };

  // const fetchDataIsBought = async () => {
  //   try {
  //     const finalizeRefHandle = refFromContract || refAddress;

  //     if (userAddress) {
  //       const getUserIsBought: any = await viewLaunchpad("isBought", [
  //         userAddress,
  //       ]);
  //       setUserIsBought(getUserIsBought);
  //     }

  //     if (
  //       finalizeRefHandle &&
  //       finalizeRefHandle.toLowerCase() !== ADDRESS_ZERO.toLowerCase()
  //     ) {
  //       const rerIsBought: any = await viewLaunchpad("isBought", [finalizeRef]);
  //       setRefIsBought(rerIsBought);
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // ----------------------------------------------------------------------
  //invest
  const {
    hash: hashInvest,
    error: errorInvest,
    executeContract: executeInvest,
    isPending: isPendingInvest,
  } = writeTransactionLaunchpad("invest", [value * 1e18, finalizeRef]);

  const { isLoading: isConfirmingInvest, isSuccess: isConfirmedInvest } =
    useWaitForTransactionReceipt({
      hash: hashInvest,
    });

  useEffect(() => {
    if (isConfirmedInvest) {
      toast.success("Invest USDT successfully!");
      setValue(0);
    }
    if (errorInvest) {
      toast.error(
        (errorInvest as BaseError).shortMessage || errorInvest.message
      );
    }
    // fetchData();
  }, [isConfirmedInvest, errorInvest]);

  const handleInvest = async () => {
    try {
      setFetching(true);
      if (value < minInvest) {
        toast.error(`Invest cannot be less than ${minInvest}`);
        setFetching(false);

        return;
      }

      await executeInvest();
      setFetching(false);
    } catch (error) {
      setFetching(false);

      console.log(error);
    }
  };
  // ----------------------------------------------------------------------
  //approve usdt

  const {
    hash: hashApproveUSDT,
    error: errorApproveUSDT,
    executeContract: executeUSDT,
    isPending: isPendingUSDT,
  } = writeTransactionUSDT("approve", [NFT_CONTRACT_DATA_ADDRESS, MAX_UINT256]);

  const { isLoading: isConfirmingUSDT, isSuccess: isConfirmedUSDT } =
    useWaitForTransactionReceipt({
      hash: hashApproveUSDT,
    });
  const handleApproveUSDT = async () => {
    setFetching(true);
    if (
      new BigNumber(value).isGreaterThan(new BigNumber(usdtBalance?.formatted!))
    ) {
      setFetching(false);
      toast.error("Not enough USDT Balance!");
      return;
    }
    try {
      executeUSDT();
    } catch (error) {
      console.log(error);
    }
    setFetching(false);
  };

  useEffect(() => {
    if (isConfirmedUSDT) {
      toast.success("Approve USDT successfully!");
    }
    if (errorApproveUSDT) {
      toast.error(
        (errorApproveUSDT as BaseError).shortMessage || errorApproveUSDT.message
      );
    }
    // fetchData();
  }, [isConfirmedUSDT, errorApproveUSDT]);
  const isUSDTApproved =
    new BigNumber(usdtAllowance.toString()).toNumber() >= value * 1e18 &&
    new BigNumber(usdtAllowance.toString()).toNumber() >= minInvest * 1e18;

  // console.log("isUSDTApproved", isUSDTApproved);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!/^\d*$/.test(newValue)) return;

    let numericValue = Number(newValue);

    // if (numericValue < minInvest) {
    //   toast.error(`Invest cannot be less than ${minInvest}`);
    //   numericValue = minInvest;
    // }
    if (numericValue > maxInvest) {
      toast.error(`Invest cannot exceed ${maxInvest}`);
      numericValue = maxInvest;
    }
    setValue(numericValue);
  };
  const handleGetLink = () => {
    const element = document.createElement("textarea");
    element.value = `${window.location.origin}/?ref=${userAddress}`;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    toast.success("Copied Link");
  };

  useEffect(() => {
    fetchData();
    // fetchDataIsBought();
  }, [userAddress, refAddress, refFromContract, isConfirmedUSDT]);
  return (
    <StyledDepositContainer>
      <StyledTitleDepositContainer>
        <StyledTitle>
          <StyledTitleLeft>FCFS</StyledTitleLeft>
          <StyledTitleRight>TERM/USDT</StyledTitleRight>
        </StyledTitle>
      </StyledTitleDepositContainer>
      <StyledMainContentContainer>
        <StyledMainContainerBorder>
          <StyleMainContentHead>
            <StyledCardMainContentHeadContainer>
              <StyledItemCardMainContentHeadContainer>
                <StyledTextGray>Market cap:</StyledTextGray>
                <StyledTextWhite>$35,000,000.0</StyledTextWhite>
              </StyledItemCardMainContentHeadContainer>
              <StyledItemCardMainContentHeadContainer>
                <StyledTextGray>Total raised:</StyledTextGray>
                <StyledTextWhite>$150,000</StyledTextWhite>
              </StyledItemCardMainContentHeadContainer>
              {/* <StyledItemCardMainContentHeadContainer>
                <StyledTextGray>Market cap:</StyledTextGray>
                <StyledTextWhite>
                  1 TERM
                  <StyledTextGray>= 0.15 USDT</StyledTextGray>
                </StyledTextWhite>
              </StyledItemCardMainContentHeadContainer> */}
            </StyledCardMainContentHeadContainer>

            {/* line */}
            <StyleLine />

            <StyledCardMainContentHeadContainer>
              <StyledItemCardMainContentHeadContainer>
                <StyledTextGray>Start Pool:</StyledTextGray>
                <StyledTextWhite>{changeDate(startTime)}</StyledTextWhite>
              </StyledItemCardMainContentHeadContainer>
              <StyledItemCardMainContentHeadContainer>
                <StyledTextGray>End Pool:</StyledTextGray>
                <StyledTextWhite>25/03/2025</StyledTextWhite>
              </StyledItemCardMainContentHeadContainer>
            </StyledCardMainContentHeadContainer>

            {/* line */}
            <StyleLine />

            <StyledCardMainContentHeadContainer>
              {/* <StyledItemCardMainContentHeadContainer>
                <StyledTextGray>Claim:</StyledTextGray>
                <StyledTextWhite>TBA</StyledTextWhite>
              </StyledItemCardMainContentHeadContainer> */}
              <StyledItemCardMainContentHeadContainer>
                <StyledTextGray>Vesting:</StyledTextGray>
                <StyledTextWhite>lock 1 month</StyledTextWhite>
              </StyledItemCardMainContentHeadContainer>
            </StyledCardMainContentHeadContainer>
          </StyleMainContentHead>

          <StyledBodyMainContentContainer>
            {/* <StyledBodyMainContentTextEndIn>
              <StyledBodyMainContentTextEndInBlur />
              <StyledBodyMainContentTextEndInFlex>
                <StyledTextGray>End in</StyledTextGray>
                <StyleLine size="24px" />
                <StyledTextWhite>{formatTimestamp(endTime)}</StyledTextWhite>
              </StyledBodyMainContentTextEndInFlex>
            </StyledBodyMainContentTextEndIn> */}
            <div>
              {finalizeRef && (
                <StyleDisplayInformationCurrent>
                  <StyledTextGray>Ref address</StyledTextGray>

                  <StyledTextWhite>{`${finalizeRef.slice(
                    0,
                    10
                  )}...${finalizeRef.slice(-10)}`}</StyledTextWhite>
                </StyleDisplayInformationCurrent>
              )}
              {!finalizeRef && (
                <StyledTextWaring>
                  Must have ref address. Please try to access with referral
                  link.
                </StyledTextWaring>
              )}
              {/* {!refIsBought && (
                <StyledTextWaring>
                  Your ref address has not purchased
                </StyledTextWaring>
              )} */}
            </div>
            <StyleComponentFlexBetween>
              <StyledTextGray>Buy</StyledTextGray>
              <StyleComponentFlexBetween style={{ gap: "12px" }}>
                <StyledTextGray>Available Balance: </StyledTextGray>
                {usdtBalance ? (
                  <StyledTextWhite>
                    {Math.round((Number(usdtBalance?.formatted) * 100) / 100)}{" "}
                    USDT
                  </StyledTextWhite>
                ) : (
                  "0 USDT"
                )}
              </StyleComponentFlexBetween>
            </StyleComponentFlexBetween>
            <input
              style={{ height: "45px", padding: "0px 10px" }}
              value={value}
              onChange={handleChange}
            />
            <StyleComponentFlexBetween>
              <StyledMinMax>MIN: {minInvest}</StyledMinMax>
              <StyledMinMax>
                MAX: {new Intl.NumberFormat("en-US").format(maxInvest)}
              </StyledMinMax>
            </StyleComponentFlexBetween>

            {!isUSDTApproved ? (
              <StyledButtonDeposit onClick={handleApproveUSDT}>
                {isPendingUSDT || isConfirmingUSDT || fetching
                  ? "approving ..."
                  : "approve"}
              </StyledButtonDeposit>
            ) : (
              <StyledButtonDeposit onClick={handleInvest}>
                {fetching || isPendingInvest || isConfirmingInvest
                  ? "Investing ..."
                  : "Invest"}
              </StyledButtonDeposit>
            )}
            {userAddress && (
              <React.Fragment>
                <StyledTextGray>Referral</StyledTextGray>
                <StyleComponentFlexBetween gap="12px">
                  <StyledCardInvitationLink>
                    <StyledTextGray>Invitation Link</StyledTextGray>
                    <StyledTextWhite>{`${
                      window.location.origin
                    }/?ref=${userAddress.slice(0, 5)}...`}</StyledTextWhite>
                  </StyledCardInvitationLink>

                  <StyledIconInvitationLink onClick={handleGetLink}>
                    copy
                  </StyledIconInvitationLink>
                </StyleComponentFlexBetween>
              </React.Fragment>
            )}
          </StyledBodyMainContentContainer>
        </StyledMainContainerBorder>
      </StyledMainContentContainer>
    </StyledDepositContainer>
  );
}

export default Deposit;
