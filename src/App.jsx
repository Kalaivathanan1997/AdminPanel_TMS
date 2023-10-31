import Agents from './component/admin/Agents/Agents';
import AgentView from './component/admin/Agents/AgentView';
import Dashboard from './component/admin/Dashboard';
import DepositHistory from './component/admin/Deposit History/DepositHistory';
import Moderators from './component/admin/Moderators/Moderators';
import Transactions from './component/admin/Transaction/Transactions';
import Test from './component/admin/test';
import Layout from './component/layouts/layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (

    < >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard></Dashboard>} />
          <Route path="/agent" element={<Agents/>} />
          <Route path="/agent_view" element={<AgentView/>} />
          <Route path="/transaction" element={<Transactions/>} />
          <Route path="/moderator" element={<Moderators/>} />
          <Route path="/depositHistory" element={<DepositHistory/>} />

          {/* <Route path="/" element={<Layout/>} />  */}
        </Route>
      </Routes>
    </>
  )
}

export default App
