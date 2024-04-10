import { Loader } from 'rsuite';
import Nav from "../../components/nav"
import Footer from "../../components/footer"

function loading(){
    return(
        <>
            <Nav/>
            <Loader center size="md" content="loading" />
            <Footer/>
        </>
    )
}

export default loading