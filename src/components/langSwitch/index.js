import React from 'react';
import { Select } from 'antd';
// import { LanguageStore } from '@/store';

const { Option } = Select;

function TopBarLangSwitch(props) {
  // const [locale, changeLanguage] = LanguageStore(
  //   state => [state.locale, state.changeLanguage],
  //   shallow,
  // );

  function handleLangChange(value) {
    // changeLanguage(value);
  }

  return (
    <Select
      {...props}
      size="large"
      // defaultValue={locale}
      onChange={handleLangChange}
    >
      <Option value="Bangla">BN</Option>
      <Option value="english">EN</Option>
    </Select>
  );
}

export default TopBarLangSwitch;
