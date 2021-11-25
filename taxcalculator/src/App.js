import './App.scss';
import { useEffect, useState } from 'react';


function App() {
  const [pb, setpb] = useState([0, 0, 0, 0, 0]);
  const [pb1, setpb1] = useState([0, 0, 0, 0, 0]);
  const [cid, setcid] = useState(0);
  const [cname,setcname]=useState('');
  const [tax1,settax1]=useState(0)
  const [tax2,settax2]=useState(0)
  const [tax3,settax3]=useState(0)
  const [tax4,settax4]=useState(0)
  const [tax5,settax5]=useState(0)



  function onchange1(e) {
    e.preventDefault();
    var k = [...pb];
    var j = [...pb1];
    k[0] = e.target.value;
    j[0] = e.target.value;

    setpb1(j);

    k[0] = e.target.value * 1.5;
    setpb(k);



  }
  function onchange2(e) {
    e.preventDefault();
    var k = [...pb];
    var j = [...pb1];

    k[1] = e.target.value;
    j[1] = e.target.value;

    setpb1(j);

    k[1] = e.target.value * 2;
    setpb(k);
  }
  function onchange3(e) {
    e.preventDefault();
    var k = [...pb];
    var j = [...pb1];

    k[2] = e.target.value;
    j[2] = e.target.value;

    setpb1(j);
    k[2] = e.target.value * 1.8;
    setpb(k);
  }
  function onchange4(e) {
    e.preventDefault();
    var k = [...pb];
    var j = [...pb1];

    k[3] = e.target.value;
    j[3] = e.target.value;

    setpb1(j);
    k[3] = e.target.value * 5;
    setpb(k);
  }
  function onchange5(e) {
    e.preventDefault();
    var k = [...pb];
    var j = [...pb1];

    k[4] = e.target.value;
    j[4] = e.target.value;

    setpb1(j);
    k[4] = e.target.value * 4.5;
    setpb(k);
  }
  function onchangec(e) {
    e.preventDefault();
    setcid(e.target.value);

  }
// calculate start
  async function handleSubmit(e) {
    e.preventDefault();
    var axios = require('axios');
    var qs = require('qs');
    var data1 = qs.stringify({
      'cid': cid,
      'itemid': '1',
      'quantity': pb1[0]
    });
    var data2 = qs.stringify({
      'cid': cid,
      'itemid': '1',
      'quantity': pb1[1]
    });
    var data3 = qs.stringify({
      'cid': cid,
      'itemid': '1',
      'quantity': pb1[2]
    });
    var data4 = qs.stringify({
      'cid': cid,
      'itemid': '1',
      'quantity': pb1[3]
    });
    var data5 = qs.stringify({
      'cid': cid,
      'itemid': '1',
      'quantity': pb1[4]
    });
    var config1 = {
      method: 'post',
      url: 'http://localhost:4000/tax/gettax',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data1
    };
    var config2 = {
      method: 'post',
      url: 'http://localhost:4000/tax/gettax',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data2
    };
    var config3 = {
      method: 'post',
      url: 'http://localhost:4000/tax/gettax',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data3
    };
    var config4 = {
      method: 'post',
      url: 'http://localhost:4000/tax/gettax',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data4
    };
    var config5 = {
      method: 'post',
      url: 'http://localhost:4000/tax/gettax',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data5
    };

//call backend api
    axios(config1)
      .then(function (response) {
        settax1(response.data.taxtopay);

        setcname(response.data.customer);
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      axios(config2)
      .then(function (response) {
        settax2(response.data.taxtopay);

        console.log(response.data)


      })
      .catch(function (error) {
        console.log(error);
      });
      axios(config3)
      .then(function (response) {
        settax3(response.data.taxtopay);

        console.log(response.data)

      })
      .catch(function (error) {
        console.log(error);
      });
      axios(config4)
      .then(function (response) {
        settax4(response.data.taxtopay);

        console.log(response.data)

      })
      .catch(function (error) {
        console.log(error);
      });
      axios(config5)
      .then(function (response) {
        settax5(response.data.taxtopay);

        console.log(response.data)

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function addtogether(a){
    
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    
    return a.reduce(reducer);
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table id="item" >
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Item Sample</th>
            <th>Item Price Per</th>
            <th>Item Quantity</th>
            <th>Price Before Tax</th>
            <th>Tax</th>
            <th>Price After Tax</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Apple</td>
            <td><img src='https://www.collinsdictionary.com/images/full/apple_158989157.jpg' width="70"></img></td>
            <td>1.5 CAD per</td>
            <td><input type="number"
              name="apple"
              onChange={onchange1}></input></td>
            <td>{pb[0].toFixed(2)}</td>
            <td>{tax1.toFixed(2)}</td>
            <td>{pb[0]+tax1}</td>


          </tr>
          <tr>
            <td>2</td>
            <td>Banana</td>
            <td><img src='https://www.collinsdictionary.com/images/thumb/banana_64728013_250.jpg?version=4.0.200' width='70'></img></td>
            <td>2.0 CAD per</td>
            <td><input type="number" name="banana" onChange={onchange2}></input></td>
            <td>{pb[1].toFixed(2)}</td>
            <td>{tax2.toFixed(2)}</td>
            <td>{pb[1]+tax2}</td>


          </tr>
          <tr>
            <td>3</td>
            <td>Orange</td>
            <td><img src='https://www.collinsdictionary.com/images/thumb/orange_342874121_250.jpg?version=4.0.200' width='70'></img></td>
            <td>1.8 CAD per</td>
            <td><input type="number" name="grapes" onChange={onchange3}></input></td>
            <td>{pb[2].toFixed(2)}</td>
            <td>{tax3.toFixed(2)}</td>
            <td>{pb[2]+tax3}</td>


          </tr>
          <tr>
            <td>4</td>
            <td>Grapes</td>
            <td><img src='https://www.collinsdictionary.com/images/thumb/grape_229112122_250.jpg?version=4.0.200' width='70'></img></td>
            <td>5.0 CAD per</td>
            <td><input type="number" name="mango" onChange={onchange4}></input></td>
            <td>{pb[3].toFixed(2)}</td>
            <td>{tax4.toFixed(2)}</td>
            <td>{pb[3]+tax4}</td>


          </tr>
          <tr>
            <td>5</td>
            <td>Mango</td>
            <td><img src='https://www.collinsdictionary.com/images/thumb/mango_414745195_250.jpg?version=4.0.200' width='70'></img></td>
            <td>4.5 CAD per</td>
            <td><input type="number" name="mango" onChange={onchange5}></input></td>
            <td>{pb[4].toFixed(2)}</td>
            <td>{tax5.toFixed(2)}</td>
            <td>{pb[4]+tax5}</td>


          </tr>



        </table>
        <label for="inp" class="inp">
          <input type="text" id="inp" placeholder="&nbsp;" name="cid" onChange={onchangec}></input>
          <span class="label">Customer ID</span>
          <span class="focus-bg"></span>
        </label>
        <button
          type="Submit"
        >
          Calculate
        </button>
      </form>


      <table id='item'>
        <tr>
          <th>Customer Name</th>
          <th>Total Price Before Tax</th>
          <th>Total Tax</th>
          <th>Total Price After Tax</th>


        </tr>
        <tr>
          <td>{cname}</td>
          <td>{(addtogether(pb)).toFixed(2)}</td>
          <td>{(tax1+tax2+tax3+tax4+tax5).toFixed(2)}</td>
          <td>{(addtogether(pb)+tax1+tax2+tax3+tax4+tax5).toFixed(2)}</td>

        </tr>


      </table>
    </div>
  );
}

export default App;
