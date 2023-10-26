import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  styled
} from '@mui/material';

import Link from 'src/components/Link';
import waves from 'public/WavesPink.svg';
import appletsLogo from 'public/AppletsLogo.svg';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-weight: bold;
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(35)};
`
);

const TypographyH3 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(20)};
`
);

const Spacer = styled(Typography)(
  ({ theme }) => `
`
);

const LoginContainer = styled(Box)(
  ({ theme }) => `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #181820;
`
);

const LoginButton = styled(Button)(
  ({ theme }) => `
    background: #4356B9;
`
);

const LoginTextField = styled(TextField)(
  ({ theme }) => `
    width: 28rem;
`
);

function ResetPassword() {
  return (
    <LoginContainer>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <TypographyH1 variant="h1">
            Portail App|ETS
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            Mot de passe oublié
          </TypographyH2>
          <TypographyH3
            sx={{ lineHeight: 1.5, pb: 1 }}
            color="text.secondary"
            fontWeight="normal"
          >
            Courriel
          </TypographyH3>
          <LoginTextField 
            sx={{
              pb: 2
            }}
            type='email'
          />
          <Spacer />
          <Link
            sx={{ lineHeight: 1.5, pb: 1 }}
            color="text.secondary"
            fontWeight="normal"
            align='right' 
            href={'/'}
          >
            Retour à la page de connexion
          </Link>
          <Spacer sx={{pb: 3}} />
          <LoginButton
            LinkComponent={Link}
            href="/dashboards/tasks"
            size="large"
            variant="contained"
          >
            Connexion
          </LoginButton>
        </Grid>
      </Grid>
      <Box
        component="img"
        sx={{
          height: "100vh",
          display: "flex"
        }}
        src={waves}
      />
      <Box
        component="img"
        sx={{
          position: "fixed",
          right: "5vh",
          bottom: "5vh"
        }}
        src={appletsLogo}
      />
    </LoginContainer>
  );
}

export default ResetPassword;
