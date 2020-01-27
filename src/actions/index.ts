/**
 * @desc Saves details entered by user in registeration page.
 * @param userDetails object containing user information 
 * @return  user details object to reducer.
 */
export const setUserDetails = (userDetails) => {
    return {
        type: 'SETUSERDETAILS',
        payload: {
            userDetails: userDetails
        }
    }
}

/**
 * @desc Sets current path in state variable.
 * @param pathValue
 * @return value of path to reducer.
 */
export const setCurrentPath = (pathValue) => {
    return {
        type: 'SETCURRENTPATH',
        payload: {
            currentPath: pathValue
        }
    }
}

/**
 * @desc Sets success flag in state variable.
 * @param successFlag
 * @return value of path to reducer.
 */
export const setSuccessFlag = (successFlag) => {
    return {
        type: 'SETSUCCESSFLAG',
        payload: {
            successFlag: successFlag
        }
    }
}