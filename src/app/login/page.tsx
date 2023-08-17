const page = () => {
  return (
    <div>
      <a href="https://kauth.kakao.com/oauth/authorize?client_id=e372da97369cf835ea1691792daa9370&redirect_uri=http://localhost:3000/login/kakao&response_type=code">
        카카오 로그인
      </a>
      <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=848453248473-levss4uvgkrum3h46knam82hlv83phvr.apps.googleusercontent.com&redirect_uri=http://ec2-52-78-18-124.ap-northeast-2.compute.amazonaws.com/login/google&response_type=code&scope=email%20profile%20openid&access_type=offline">
        구글 로그인
      </a>
    </div>
  );
};

export default page;
