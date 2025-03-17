import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAccount } from "wagmi";
import { fetchListInvestByUser } from "../../../../utils/api/apis";
import { BASE_URL_BSCSCAN, formatUnits } from "../../../../utils/function";
import { DeviceSizes } from "../../../../shared/const/DeviceSizes";

const { TABLET_DEVICE } = DeviceSizes;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0px auto;
  position: relative;

  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
`;

const BackgroundContainer = styled.div`
  position: absolute;
  background: radial-gradient(
    108.54% 120.1% at 50% 0%,
    rgba(241, 149, 37, 0) 50%,
    rgba(241, 149, 37, 0.288) 100%
  );
  min-height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Title = styled.h3`
  margin: 32px 0;
  color: white;
  font-size: 24px;
  text-align: center;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  background-color: #1e1e1e;
  border: 1px solid #454545;
  border-radius: 16px;
  color: #ffffff;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-right: 8px;
  min-width: 900px;
  border-bottom: 1px solid #454545;
  background-color: rgba(227, 236, 255, 0.06);
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-right: 8px;
  width: 100%;
  min-width: 900px;

  /* @media (${TABLET_DEVICE}) {
  } */
  overflow-y: auto;
  /* margin-bottom: 12px; */
  border-bottom: 1px solid rgba(73, 73, 77, 0.48);
`;

const TableCell = styled.div`
  padding: 16px 8px;
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  border-right: 1px solid rgba(73, 73, 77, 0.48);
`;

const TransactionLink = styled.div`
  padding: 16px 8px;
  font-size: 14px;
  color: #0856cb;
  font-weight: 800;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;

const EmptyState = styled.div`
  text-align: center;
  color: #aaa;
  padding: 20px;
`;

const TableHistory = () => {
  const { address: userAddress } = useAccount();
  const [listBuy, setListBuy] = useState([]);
  const fetchData = async () => {
    try {
      const data = await fetchListInvestByUser(userAddress);
      console.log("data", data);
      setListBuy(data?.data?.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userAddress]);

  return (
    <React.Fragment>
      {" "}
      <BackgroundContainer />
      <Container style={{ marginTop: "100px" }}>
        <Title>History</Title>
        <TableContainer>
          <TableHeader>
            {["#", "Time", "Amount", "Ref", "Transaction"].map(
              (title, index) => (
                <TableCell key={index}>{title}</TableCell>
              )
            )}
          </TableHeader>
          {listBuy?.length !== 0 ? (
            listBuy.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item?.created_at}</TableCell>
                <TableCell>
                  {Math.round(
                    Number(formatUnits(BigInt(item?.amount_invested || 0), 18))
                  ).toLocaleString()}
                </TableCell>
                <TableCell>
                  {`${item?.ref.slice(0, 6)}...${item?.ref.slice(-6)}`}
                </TableCell>
                <TransactionLink
                  onClick={() =>
                    window.open(`${BASE_URL_BSCSCAN}/${item.tx_hash}`)
                  }
                >
                  {/* {item?.tx_hash.slice(0, 6)}...
                {item?.tx_hash.slice(-6)} */}
                  View
                </TransactionLink>
              </TableRow>
            ))
          ) : (
            <EmptyState>No Data Available</EmptyState>
          )}
        </TableContainer>
      </Container>
    </React.Fragment>
  );
};

export default TableHistory;
