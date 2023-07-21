import {Header} from './StylesNavbar'
import SearchBar from '../SearchBar';




export default function NavBar(props) {

    return (
    <Header>
      <SearchBar onSearch={props.onSearch} />
    </Header>
    )
}  
