
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Head from 'next/head';

import Login from './login/login';

function Overview() {
  return (
    <>
      <Head>
        <title>Portail App|ETS</title>
      </Head>
      <Login />
    </>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
