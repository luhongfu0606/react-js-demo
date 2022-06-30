import Layout, {Content, Header} from "antd/es/layout/layout";
import Head from "./components/head/Head";
import Router from "./router/Router.js";

function App() {
    return (
        <div className="App">
            <Layout>
                <Header>
                    <Head/>
                </Header>
                <Content>
                    <Router/>
                </Content>
            </Layout>
        </div>
    );
}

export default App;
