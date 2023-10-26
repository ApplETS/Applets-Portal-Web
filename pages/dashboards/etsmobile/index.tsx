import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import {
  Box,
  Typography,
  styled,
  useTheme,
  Grid,
  Card,
  CardContent,
  Badge,
} from '@mui/material';

import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

const TypographyTitle = styled(Typography)(
  ({ theme }) => `
    font-weight: bold;
    font-size: ${theme.typography.pxToRem(25)};
  `
);

const TypographySubtitle = styled(Typography)(
  ({ theme }) => `
    font-weight: bold;
    font-size: ${theme.typography.pxToRem(18)};
  `
);

const OSCard = styled(Card)(
  ({ theme }) => `
    background: #34343C;
  `
);

const Spacer = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(2)};
  `
);

function DashboardETSMobile() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>ETSMobile</title>
      </Head>

      <Grid container spacing={2} px={4} pt={2}>
        <Grid item xs={12} sm={6}>
          <OSCard>
            <CardContent>
              <AndroidIcon fontSize='large' color='success' />
              <TypographyTitle color='lightgreen'>
                Beta
              </TypographyTitle>
              <Typography variant="body1">
                blabla android
              </Typography>
            </CardContent>
          </OSCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <OSCard>
            <CardContent>
              <AppleIcon fontSize='large' />
              <TypographyTitle>
                Beta
              </TypographyTitle>
              <Typography variant="body1">
                blabla ios
              </Typography>
            </CardContent>
          </OSCard>
        </Grid>
      </Grid>

      <Spacer />

      <Grid container spacing={2} px={4} pt={2}>
        <TypographyTitle color='orange'>
          Crashlytics
        </TypographyTitle>
      </Grid>

      <Grid container spacing={2} px={4} pt={2}>
        <Grid item xs={12} sm={6}>
          <OSCard>
            <CardContent>
              <TypographyTitle color='orange'>
                Stats
              </TypographyTitle>
            </CardContent>
          </OSCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <OSCard>
            <CardContent>
              <TypographyTitle color='cyan'>
                Stats 2
              </TypographyTitle>
            </CardContent>
          </OSCard>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

DashboardETSMobile.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardETSMobile;
