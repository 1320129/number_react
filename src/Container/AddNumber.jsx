import AddNumber from '../Component/AddNumber';
import {connect} from 'react-redux';
function MapToReduxDispatchFromReactProps(dispatch){
    return{
        onClick:function(item){
          dispatch({type:'INCREMENT',size:item});
      }
    }
}
export default connect(null, MapToReduxDispatchFromReactProps)(AddNumber);

// export default class extends Component{
//     render(){
//         return <AddNumber onClick={function(item){
//             store.dispatch({type:'INCREMENT',size:item});
//         }.bind(this)}/>
//     }
// }

