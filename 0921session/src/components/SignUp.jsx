import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.password !== "" &&
    form.passwordConfirm !== "" &&
    form.password === form.passwordConfirm;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
    window.alert(`${form.name}님, 회원가입이 완료되었습니다.`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-primary-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 rounded-2xl bg-white p-10 shadow-sm"
      >
        <h1 className="title-sm text-neutral-500">회원가입</h1>

        <div className="flex flex-col gap-5">
          <Input
            label="이름"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
          />
          <Input
            label="이메일"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="이메일을 입력하세요"
            autoFocus
          />
          <Input
            label="비밀번호"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
          />
          <Input
            label="비밀번호 확인"
            name="passwordConfirm"
            type="password"
            value={form.passwordConfirm}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력하세요"
          />
          <Input
            label="추천인 코드 (준비 중)"
            name="referral"
            value=""
            onChange={() => {}}
            placeholder="입력할 수 없습니다."
            disabled
          />
        </div>

        <Button text="회원가입" type="submit" disabled={!isValid} />
      </form>
    </main>
  );
}
