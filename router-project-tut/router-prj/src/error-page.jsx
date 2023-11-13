
import { useRouteError } from 'react-router-dom'
export const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <div>
<h1>oops</h1>
<p>Sorry,an unexpected error has occured</p>
<p>{error.statusText || error.message}</p>

    </div>
  )
}
