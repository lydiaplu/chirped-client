import React, { useState } from 'react';
import styled from 'styled-components';

export const TagNavContainer = styled.div`
  display: flex;
  /* background: #f8f9fa; */
  padding: 10px 0;
  justify-content: space-around;
`;

export const TagNavItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 3px solid transparent; /* 默认无下划线 */
  border-bottom-color: ${props => props.active ? '#007bff' : 'transparent'}; /* 当active为true时显示浅蓝色下划线 */

  color: ${props => props.active ? '#007bff' : 'black'}; // 根据active状态改变颜色
  border-bottom: ${props => props.active ? '2px solid #007bff' : 'none'}; // 活跃状态下有下划线

  &:hover {
    /* background-color: #e9ecef; */
    /* border-bottom-color: #007bff; */
    border-bottom: 2px solid #007bff; /* 默认无下划线 */
  }
`;
