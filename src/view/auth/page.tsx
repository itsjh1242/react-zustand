import { Section } from "@/components/layout/section";
import { H2, Label, MutedText } from "@/components/text/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/store/use-auth-store";
import { ChevronLeft, IdCard, Lock, Unlock } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  const { user, setUser } = useUserStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  /**
   * @description 로그인 버튼 클릭 시 유저 정보를 업데이트
   */
  const handleLogin = () => {
    setUser({ username, password });
    navigate("/");
    return;
  };

  /**
   * @description 로그아웃 버튼 클릭 시 유저 정보를 null로 업데이트
   */
  const handleLogout = () => {
    setUser(null);
    return;
  };

  /**
   * @description 로그인 상태에 따라 상태 업데이트
   */
  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setPassword(user.password);
    }
  }, [user]);

  return (
    <>
      <Section className="h-screen w-full items-center justify-center">
        <div className="w-full max-w-sm space-y-6 rounded-md border-[0.5px] border-gray-300 p-4">
          <div>
            <div className="flex items-center gap-2">
              <ChevronLeft
                size={24}
                onClick={() => navigate("/")}
                className="cursor-pointer"
              />
              <H2>{user ? "Logout" : "Login"}</H2>
            </div>
            <MutedText>
              {user
                ? "You are logged in. Click the button to logout."
                : "Please login to continue."}
            </MutedText>
          </div>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label className="flex items-center gap-1 text-gray-500">
                <IdCard size={16} />
                username
              </Label>
              <Input
                placeholder="type your username"
                disabled={!!user}
                value={user ? user.username : username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label className="flex items-center gap-1 text-gray-500">
                <Lock size={16} />
                password
              </Label>
              <div className="relative">
                <Input
                  placeholder="type your password"
                  type={isPasswordVisible ? "text" : "password"}
                  disabled={!!user}
                  value={user ? user.password : password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? (
                    <Unlock size={16} />
                  ) : (
                    <Lock size={16} />
                  )}
                </div>
              </div>
            </div>
          </div>
          {!user && (
            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
          )}
          {user && (
            <Button
              className="w-full"
              variant="destructive"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
        </div>
      </Section>
    </>
  );
};
