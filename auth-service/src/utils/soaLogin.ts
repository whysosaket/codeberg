import getPotalURL from './getPortalURL';

const getLoginInfo = async (registrationNumber:string, password: string) => {
    const portalURL = await getPotalURL();
    const loginURL = `${portalURL}login`;
    const studentInfoURL = `${portalURL}studentinfo`;
    const studentPhotoURL = `${portalURL}image/studentPhoto`;

    // loggin in here
    const payload = {
        "username": registrationNumber,
        "password": password,
        "MemberType": "S",
    }

    // send a post req and save the cookies

    const response = await fetch(loginURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const cookies = response.headers.get('set-cookie');
    console.log('Cookies:', cookies);

    const getStudentInfo = await fetch(studentInfoURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': cookies as string, // Include the received cookies in the Cookie header
        },
    });

    const studentInfo = await getStudentInfo.json();
    // console.log('Student Info:', studentInfo.detail[0]);
    const requiredInfo = {
        name: studentInfo.detail[0].name,
        email: studentInfo.detail[0].semailid,
        dob: studentInfo.detail[0].dateofbirth,
        gender: studentInfo.detail[0].gender,
        registrationNumber: studentInfo.detail[0].enrollmentno,
        batch: studentInfo.detail[0].admissionyear,
        program: studentInfo.detail[0].programdesc,
        branch: studentInfo.detail[0].branchdesc,
        phone: studentInfo.detail[0].scellno,
        sectionCode: studentInfo.detail[0].sectioncode,
    }
    console.log('Required Info:', requiredInfo);
}

export default getLoginInfo;