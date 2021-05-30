import DisplayNumber from '../Component/DisplayNumber';
import {connect} from 'react-redux';
function MapToReduxStateFromReactProps(state){
    return{
        number:state.number
    }
}
function MapToReduxDispatchFromReactProps(){
    return{

    }
}
export default connect(MapToReduxStateFromReactProps, MapToReduxDispatchFromReactProps)(DisplayNumber);


// export default class extends Component{
//     state = {number:store.getState().number}
//         constructor(props){
//         super(props);
//         store.subscribe(function(){
//             this.setState({number:store.getState().number});
//         }.bind(this));
//         }
//     render(){
//         return <DisplayNumber number={this.state.number}/>
//     }
// }