import useProvideAuth from './useProvideAuth';
import { authContext } from './useAuth';
const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default ProvideAuth;
