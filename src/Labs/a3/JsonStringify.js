import JsonPre from ". /JsonPre";

    function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    console. log(squares);
    return ( 
    <div>
         <h4>JsonStringify</h4>
        squares = {JSON.strinaifv(squares) }
         <br /> 
         <JsonPre json = { squares } />
    </div>);
ß }
export default JsonStringify;