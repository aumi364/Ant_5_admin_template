import React from 'react';
import { css, Global, useTheme } from '@emotion/react';

export const GlobalStyle = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-rendering: optimizeLegibility;
        }
        ,
        html {
          font-size: 70%;

          body {
            font-family: 'Epilogue', serif;
            line-height: 155%;
            font-size: 1rem;
            -webkit-overflow-scrolling: touch;

            input,
            button,
            select,
            optgroup,
            textarea,
            span,
            li,
            a,
            button {
              font-family: 'Epilogue', sans-serif;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-family: 'Epilogue', sans-serif;
              font-weight: bold;
              margin-bottom: 0 !important;
            }
            label {
              font-family: 'Epilogue', sans-serif;
              font-weight: bold;
            }
          }
        }
        ,
              /* Typography Utils */

            . text {
          &-center {
            text-align: center;
          }

          &-left {
            text-align: left;
          }

          &-right {
            text-align: right;
          }
        }

        .font {
          &-light {
            font-weight: 300;
          }

          &-normal {
            font-weight: 400;
          }

          &-bold {
            font-weight: 700;
          }

          &-medium {
            font-weight: 500;
          }
        }

        //dashboard
        html h1,
        html h2,
        html h3,
        html h4,
        html h5,
        html h6,
        html a,
        html p,
        html li,
        input,
        textarea,
        span,
        div,
        html,
        body,
        html a {
          margin-bottom: 0;
        }

        html ul {
          -webkit-padding-start: 0px;
          list-style: none;
          margin-bottom: 0;
        }

        .scrollbar-track-y,
        .scrollbar-thumb-y {
          width: 5px !important;
        }

        .scrollbar-track-x,
        .scrollbar-thumb-x {
          height: 5px !important;
        }

        .scrollbar-thumb {
          border-radius: 0 !important;
        }

        .scrollbar-track {
          background: rgba(222, 222, 222, 0.15) !important;
        }

        .scrollbar-thumb {
          border-radius: 0 !important;
          background: rgba(0, 0, 0, 0.5) !important;
        }

        .ant-form-item-required {
          flex-direction: row-reverse;
          gap: 0.5rem;
        }
        .ant-typography-secondary {
          color: ${theme.gray[300]} !important;
        }
        .ant-btn {
          box-shadow: none;
        }
      `}
    />
  );
};
