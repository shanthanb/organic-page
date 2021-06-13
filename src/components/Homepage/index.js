
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../Navbar'
import Sectiontwo from '../Sectiontwo'
import Sectionthree from '../Sectionthree'
import Deck from '../Deck';
import Deck2 from "../Deck2";
import Comments from '../Comments';
import ReadBlog from '../ReadBlog';
import Footer from '../Footer';


const useStyles = makeStyles((theme) => ({
    rectangle1: {
        backgroundImage: "linear-gradient(to bottom, #f1fefe, rgba(241, 254, 254, 0))"
    }
}))
const Home = () => {
    const classes = useStyles();
    return ( 
        <div>
            <div className={classes.rectangle1}>
                <Nav/>
                <Sectiontwo />
            </div>
            <Sectionthree />
            <Deck />
            <Deck2 />
            <Comments />
            <ReadBlog />
            <Footer />
        </div>
     );
}
 
export default Home;