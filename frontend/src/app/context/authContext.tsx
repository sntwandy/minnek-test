'use client';

import { useRouter } from "next/navigation";
import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
type AuthToken = {
	token: string;
};

const AUTH_TOKENS_KEY = 'token';
const SECRET_KEY = process.env.SECRET_KEY;

export const AuthContext = createContext({
	login: (token: AuthToken) => {},
	logout: () => {},
	isLoggedIn: false,
});

export default function AuthContextProvider({
	children,
}: {
	children: ReactNode;
}) {
  const router = useRouter();
	const authToken = window.localStorage.getItem(AUTH_TOKENS_KEY);
	const [token, setToken] = useState(
		authToken === null ? null : JSON.parse(authToken)
	);

	const login = useCallback(function (token: AuthToken) {
		window.localStorage.setItem(AUTH_TOKENS_KEY, JSON.stringify(token));
    setToken(token);
	}, []);

	const logout = useCallback(function () {
		window.localStorage.removeItem(AUTH_TOKENS_KEY);
    setToken(null);
	}, []);

	const value = useMemo(
		() => ({
			login,
			logout,
			token,
			isLoggedIn: authToken !== null,
		}),
		[authToken, login, logout, token]
	);

  useEffect(() => {
    if (token === null) {
      router.push("/login");
    }
	}, [router, token]);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
	return useContext(AuthContext);
}
