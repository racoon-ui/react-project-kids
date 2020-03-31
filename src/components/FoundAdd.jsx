import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';


const FoundAdd = () => {
    const { register,errors, handleSubmit } = useForm({
        mode: 'onBlur',
      });
    //const onSubmit = data => console.log(data)

    const [hello1, setHello1] = useState(null);
    const [hello2, setHello2] = useState(null);

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization':hello2
        },

      }

    const onSubmit =data =>{
        console.log(data)      
        axios.post('https://shrouded-escarpment-56668.herokuapp.com/api/stores', 
        {
            "name": "10041004",
            "address": "서울지역",
            "phone": "02-7777-6666",
            "hour": "08:00~21:00",
            "facilities": ["주차가능", "소주판매", "단체", "와이파이","신용카드가능"],
            "location": {
                "type": "Point",
                "coordinates": [37.538669,126.96654]
            }
        }
        , config)
  
    }  


    const loginBtn=() =>{


            // 아래가 django 페이지로 전달한다
            axios.post('https://shrouded-escarpment-56668.herokuapp.com/api/users/login', {
                "email": "dongdong@example.com",
                "password": "12345678"
            })
            .then(function (response) {
                setHello1(response.data._id)
                setHello2(response.data.token)
                console.log(response.data._id,response.data.token)
                if(response.data.result == 'success')
                    return 'success';
                else
                    return 'fail';
            })
            .catch(function (error) {
                console.log(error);
                return 'fail';
            });
        


    }




    const Error = ({ message }) => <div className="error-container">{message}</div>;




























    return (
        <div>
      <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="name">
                지점명
                <input
                    type="text"
                    id="name"
                    name="name"
                    ref={register({
                        required: '지점명을 입력하세요',
                        maxLength: {
                            value: 10,
                            message: '지점명은 최대 10자 이하여야 합니다',
                            }
                        })}
                />
        {errors.name && <Error message={errors.name.message} />}<br /><br /><br />
</label>

<label htmlFor="address">
     주소
        <input
          type="text"
          id="address"
          name="address"
          ref={register({
            required: '주소를 입력하세요',
            maxLength: {
              value: 20,
              message: '주소는 최대 20자 이하여야 합니다',
            }
          })}
        />
        {errors.address && <Error message={errors.address.message} />}<br /><br /><br />
</label>

<label htmlFor="phone">
          전화번호
        <input
          type="text"
          id="phone"
          name="phone"
          ref={register({
            required: '전화번호를 입력하세요',
            maxLength: {
              value: 10,
              message: '전화번호는 최대 10자 이하여야 합니다',
            },
            pattern: {
              value: /^[0-9]+$/i,
              message: '숫자만 입력하세요',
            },
          })}
        />
        {errors.phone && <Error message={errors.phone.message} />}<br /><br /><br />
</label>

<label htmlFor="hour">
          영업시간
        <input
          type="text"
          id="hour"
          name="hour"
          ref={register({
            required: '영업시간을 입력하세요',

          })}
        />
        {errors.hour && <Error message={errors.hour.message} />}<br /><br /><br />
</label>









              <button type="submit" >
        Change DANTE
      </button>



      
      </form>
      <button onClick={loginBtn}>로그인</button>
      </div>
    );
  };
export default FoundAdd;