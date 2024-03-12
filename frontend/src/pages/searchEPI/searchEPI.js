import Nav from "../../components/nav"
import Footer from "../../components/footer"
import "./style.css"
import Select from 'react-select'



function SearchEPI() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <>
            <Nav />
            <div className="square">
                <p className="t">Digite o EPI desejado</p>

                <Select options={options} />

            </div>


            <Footer />
        </>
    )
}

export default SearchEPI