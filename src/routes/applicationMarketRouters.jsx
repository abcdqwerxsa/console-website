/* Copyright (c) 2024 Huawei Technologies Co., Ltd.
openFuyao is licensed under Mulan PSL v2.
You can use this software according to the terms and conditions of the Mulan PSL v2.
You may obtain a copy of Mulan PSL v2 at:
         http://license.coscl.org.cn/MulanPSL2
THIS SOFTWARE IS PROVIDED ON AN 'AS IS' BASIS, WITHOUT WARRANTIES OF ANY KIND,
EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
See the Mulan PSL v2 for more details. */
import { Route, Switch, Redirect } from 'inula-router';
import { applicationRouterPrefix } from '@/constant.js';

import Market from '@/pages/applicationMarket/Market';
import MarketManage from '@/pages/applicationMarket/MarketManage';
import ApplicationDetails from '@/pages/applicationMarket/ApplicationDetails';
import Deploy from '@/pages/applicationMarket/Deploy';
import OneClickDeploy from '@/pages/applicationMarket/OneClickDeploy';
import MarketCategory from '@/pages/applicationMarket/MarketCategory';

export default function ApplicationMarketRouter() {
  return (
    <Switch>
      <Route
        path={`/${applicationRouterPrefix}/Market`}
        component={Market}
      />
      <Route
        path={`/${applicationRouterPrefix}/MarketManage`}
        component={MarketManage}
      />
      <Route
        path={`/${applicationRouterPrefix}/applicationMarket/ApplicationDetails/:chart?/:repo?/:versionRepo?`}
        component={ApplicationDetails}
      />
      <Route
        path={`/${applicationRouterPrefix}/applicationMarket/Deploy/:repo?/:chart?/:versionSelect?/:defaultNameSpace?`}
        component={Deploy}
      />
      <Route
        path={`/${applicationRouterPrefix}/applicationMarket/oneClickDeploy`}
        component={OneClickDeploy}
      />
      <Route
        path={`/${applicationRouterPrefix}/applicationMarket/marketCategory/:scene?/:isFuyaoExtension?/:isCompute?`}
        component={MarketCategory}
      />
      <Redirect path='*' to={`/${applicationRouterPrefix}/Market`} />
    </Switch>
  );
}
