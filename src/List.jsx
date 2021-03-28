import React, { useState } from 'react';



// class List extends React.Component {
//     state = {
//         numbers: [1, 2, 3]
//     }
//     addRandomNumber = () => {
//         const randNumber = Math.round(Math.random() * 10);
//         this.setState({
//             numbers: [...this.state.numbers, randNumber],
//         });
//     };
//     componentDidMount() {
//         console.log('Componet Did Mount');
//     };
//     componentDidUpdate(prevProps, prevState) {
//         // console.log('prevProps:', prevProps, 'prevState:', prevState, 'this.props:', this.props, 'this.state', this.state);
//         if (this.state.numbers.length !== prevState.length) { console.log('список обновился') };
//     }
//     componentWillUnmount() {
//         console.log('Component WIILL Delete');

//     }


//     render() {
//         return (
//             <div>

//                 <ul>
//                     {this.state.numbers.map((num, index) => (
//                         <li key={index}>{num}</li>
//                     ))}
//                 </ul>

//                 <button onClick={this.addRandomNumber}>Новое число</button>
//             </div>
//         )
//     }

// }
// export default List;
// =======Это был классовый компонент. Прейдем на функциональный ====


const List = () => {
    const [numbers, setNumber] = useState([1, 2, 3]);
    const [count, setCount] = React.useState(0); //ввели это для демострации еще одной переменной

    const addNumber = () => {
        const randNumber = Math.round(Math.random() * 10);
        const newArr = [...numbers, randNumber];
        setNumber(newArr)
    };


    React.useEffect(() => {
        console.log('Component DID Mount');
        return () => {
            console.log('Wiill Unmiunt'); //Will unmount
        }
    }, []);   //   аналог ComponentDIDMount если [], если без [] то отображает если меняется любая переменная. Если ставим переменную count numbers - обновление компоненты ComponentDidUpdate.  Для ComponentWilDelete - return

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            <button onClick={addNumber}>Новое число</button>
        </div>
    )
}

export default List;
