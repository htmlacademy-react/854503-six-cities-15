import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';

export default function NotFoundPage() {
  return (
    <div className="page page--gray page--not-found">
      <Helmet>
        <title>6 cities. 404 not found</title>
      </Helmet>
      <PageHeader isPlain={false} />
      <main>
        <h1>404 Not Found</h1>
        <Link to={AppRoute.Root}>На главную</Link>
      </main>
    </div>
  );
}
