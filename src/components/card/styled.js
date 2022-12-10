import styled from '@emotion/styled';
import { DatePicker } from 'antd';

export const StyledTableCard = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '.cardBody': {},
  '.cardFooter': {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '.5rem',
  },

  '.cardAction': {
    display: 'flex',
    '.cardButton': {
      fontSize: '.8rem',
      paddingLeft: '0',
    },
  },
});
export const StyledCard = styled.div({
  background: 'white',
  padding: '1rem',
  borderRadius: '4px',
  border: '1px solid #e2e8f0',
});

export const CardHeader = styled.div({
  display: 'flex',
  padding: '0 0 6px 0',
  justifyContent: 'space-between',
});

export const StyledTitleCard = styled.div({
  display: 'flex',
  '.title-card-content': {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1rem',
  },
  '.title-card-actions': {
    marginLeft: 'auto',
  },
  '.title-label-section': {
    display: 'flex',
    gap: '.6rem',
  },
});
export const StyledFeatureCard = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '.feature-card-item': {
    display: 'flex',
    flexDirection: 'column',
  },
  '.feature-card-content': {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '.5rem 0',

    '.feature-card-description': {
      width: '60%',
    },
    '.feature-card-action': {
      marginLeft: 'auto',
      display: 'flex',
    },
  },

  '.feature-label-section': {
    display: 'flex',
    gap: '.6rem',
    flexWrap: 'wrap',
  },
});
export const CardLabel = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '.2rem',
});

export const InvestmentDetailsContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  padding: '16px 0',
});

export const AnalyticSoftwareContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  padding: '16px 0',
});

export const SoftwareCardContainer = styled.div(({ color }) => ({
  background: color,
  padding: '24px',
  width: '350px',
  borderRadius: '8px',
  '.software-icon': {
    width: '48px',
  },
  '.software-name': {
    fontSize: '24px',
    fontWeight: '400',
    padding: '8px 0',
  },
  '.software-discription': {
    fontSize: '16px',
    fontWeight: '400',
    color: '#64748B',
  },
}));

export const AvaterCardContainer = styled.div({
  display: 'flex',
  padding: '16px 0',
  width: '100%',
  flex: '1 1 40%',
  '.info': {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1.6rem',
  },
  '.title': {
    font: '14px',
    color: '#64748B',
    fontWeight: '400',
  },

  '.discription': {
    font: '16px',
    color: '#1b1f23',
    fontWeight: '500',
    marginTop: '4px',
  },
});

export const CompanyUserContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  padding: '16px 0',
});

export const UserCardContainer = styled.div({
  background: '#f1f3f4',
  borderRadius: '8px',
  padding: '24px',
  width: 'calc((100% / 3) - 15px)',
  '.header': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.name': {
    fontSize: '24px',
    color: '#1b1f23',
    fontWeight: '400',
    marginTop: '10px',
  },
  '.designation': {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '400',
  },
  '.info': {
    fontSize: '18px',
    color: '#64748b',
    fontWeight: '400',
    marginTop: '6px',
  },
});

export const StyledDatepicker = styled(DatePicker)(({ theme, borderless }) => ({
  '.ant-picker-input': {
    flexDirection: 'row-reverse',
    gap: '.3rem',
  },
}));
