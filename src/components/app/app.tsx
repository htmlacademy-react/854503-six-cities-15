import MainPage from '../../pages/main-page/main-page';

type AppComponentProps = {
  offersAmount: number;
}

export default function App({offersAmount}: AppComponentProps): JSX.Element {
  return (
    <MainPage offersAmount={offersAmount}/>
  );
}
