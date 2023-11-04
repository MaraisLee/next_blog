"use client";

// layout.jsx = ServerSideRendering (Server Component)
// 			- meta tag (seo) 하려면 better
// darkTheme 적용하려면 Client Component 사용 필수 (user Interaction이니깐)
// So, 여기서 Client Component로 만들어서 다른 곳에 적용

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
	const { theme } = useContext(ThemeContext);
	const [monted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (monted) {
		return <div className={theme}>{children}</div>;
	}
};

export default ThemeProvider;
