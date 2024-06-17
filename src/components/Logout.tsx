
import { doLogout } from "../app/actions"

const Logout = () => {
  return (
    <form action={doLogout}>
        <button 
            className="my-2 text-white p-1 rounded border-white border-2" 
            type="submit">
                Logout
        </button>
    </form>
  )
}
export default Logout
