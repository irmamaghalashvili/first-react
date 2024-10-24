import { Panel } from '../../components';
import { default as SecondPage } from '../../components/SecondPage/SecondPage';
import { useState } from 'react';
import '../../Assets/styles/inner.css';

export default function Inner() {
	const [collapsed, setCollapsed] = useState(true);

	return (
		<div className="secondpage">
			<Panel collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}/>
			<SecondPage collapsed={collapsed} />
		</div>
	);
}