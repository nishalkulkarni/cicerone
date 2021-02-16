import styled from "styled-components";

const Header = styled.header`
  background-color: #e63946;
  padding: 48px;
`;

const NoStyleInput = styled.input`
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none;
`;

const CityInput = styled(NoStyleInput)`
  border: 2px solid #a8dadc;
  border-radius: 8px 0px 0px 8px;
  border-right: none;
  padding: 16px;
`;

const NumDaysInput = styled(NoStyleInput)`
  border: 2px solid #a8dadc;
  border-left: 1px solid #0a0a0a;
  border-right: none;
  padding: 16px;
`;

const SubmitInput = styled(NoStyleInput)`
  border: 2px solid #a8dadc;
  border-left: none;
  border-radius: 0px 8px 8px 0px;
  padding: 16px;

  background: #a8dadc;

`;

const PageHeader = () => {
  return (
    <Header>
      <form>
        <CityInput type="text" placeholder="Enter city name..." />
        <NumDaysInput type="number" min="1" placeholder="# of Days" />
        <SubmitInput type="submit" value="Make Plans" />
      </form>
    </Header>
  );
};

export default PageHeader;
