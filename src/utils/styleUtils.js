import styled from 'styled-components';

const SecondRoundCol = styled.div.attrs({
  className: 'col-md-2'
})`
  margin-top: 50px;
  margin-left: 0px !important
  margin-right: 0px !important
`
const ThirdRoundCol = styled.div.attrs({
  className: 'col-md-2'
})`
  margin-top: 140px;
  margin-left: 0px !important
  margin-right: 0px !important
`
const FourthRoundCol = styled.div.attrs({
  className: 'col-md-2'
})`
  margin-top: 300px;
  margin-left: 0px !important
  margin-right: 0px !important
`
const FinalCol = styled.div.attrs({
  className: 'col-md-2'
})`
  margin-top: 635px;
  margin-left: 0px !important
  margin-right: 0px !important`

const styleUtils = {
  SecondRoundCol,
  ThirdRoundCol,
  FourthRoundCol,
  FinalCol
};

export default styleUtils;