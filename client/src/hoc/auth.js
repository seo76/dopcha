import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {auth} from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {

    // option
    // null : 아무나 출입 가능한 페이지
    // true : 로그인한 유저만 출입 가능한 페이지
    // flase : 로그인한 유저는 출입 불가능한 페이지

    function AuthenticationCheck(props) {
        let agency = useSelector(state=>state.agency);
        let user = useSelector(state=>state.user);
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(auth()).then(response => {
                // console.log(response)
                if(!response.payload.isAuth) { // 로그인 하지 않은 상태
                    if(option) { // option : true
                        props.history.push('/login')
                    }
                } else { // 로그인한 상태
                    if(adminRoute && !response.payload.isAdmin) { // 관리자 입장 - 유저 : 일반
                        props.history.push('/homepage')
                    } else {
                        if(option === false) { // option : false
                            props.history.push('/homepage')
                        }
                    }
                }

            })
        }, []) 

        return (
            <SpecificComponent {...props} agency={agency} {...props} user={user}/>
        )
    }

    return AuthenticationCheck
}