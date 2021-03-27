import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

function Copyright() {
    const { t } = useTranslation();
    return (
      <Typography variant="body2" color="textSecondary" align="center">
         {t('footer.copyright') +   ' © '}
        {/*<Link color="inherit" href="https://coolapp.co.il">*/}
        {/*  Coolapp.co.il*/}
        {/*</Link>{' '}*/}
        <Link color="inherit" href="#">
          Coolapp
        </Link>{' '}


        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


export default  Copyright