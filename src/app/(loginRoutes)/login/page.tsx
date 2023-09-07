// TODO: 로그인 페이지 구현

const page = () => {
  return (
    <div>
      <a href={process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL}>구글 로그인</a>
      <a href={process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL}>카카오 로그인</a>
    </div>
  );
};

export default page;
