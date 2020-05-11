const koaRouter = require('koa-router')
var miniguid = require('miniguid')

const router = new koaRouter({
	prefix: '/user'
})
let treeData = [
	{
		id: miniguid(),
		label: '甲方收到两份就算了东方嘉盛代理费就福建省'
		// children: [
		// 	{
		// 		id: miniguid(),
		// 		label: '2甲方收到两份就算了东方嘉盛代理费就福建省',
		// 		children: [
		// 			{
		// 				id: miniguid(),
		// 				label: '3甲方收到两份就算了东方嘉盛代理费就福建省'
		// 			}
		// 		]
		// 	}
		// ]
	}
]

const getChildByPid = (sourceData, pid) => {
	for (let i = 0; i < sourceData.length; i++) {
		let res = sourceData.find(item => item.id === pid)
		if (res) {
			return res.children
		} else {
			if (sourceData[i].children) {
				let children = getChildByPid(sourceData[i].children, pid)
				if (children) {
					return children
				}
			}
		}
	}
}

const getParent = (sourceData, pid) => {
	for (let i = 0; i < sourceData.length; i++) {
		let res = sourceData.find(item => item.id === pid)
		if (res) {
			return res
		} else {
			if (sourceData[i].children) {
				let p = getParent(sourceData[i].children, pid)
				if (p) {
					return p
				}
			}
		}
	}
}

router.get('/test', ctx => {
	ctx.body = { data: 'success' }
})

router.post('/root', ctx => {
	const root = treeData.map(item => {
		const { id, label } = item
		return {
			id,
			label
		}
	})
	ctx.body = { data: root }
})

router.post('/childData', ctx => {
	const { pid } = ctx.request.body
	let childrens = getChildByPid(treeData, pid) || []
	if (childrens) {
		childrens = childrens.map(item => {
			const { id, label } = item
			return { id, label }
		})
	}
	ctx.body = { data: childrens }
})

router.post('/addChild', ctx => {
	const { pid, data } = ctx.request.body
	let p = getParent(treeData, pid)
	if (!p.children) {
		p.children = []
	}
	Object.assign(data, { id: miniguid() })
	p.children.push(data)
	ctx.body = { data }
})

router.post('/userList', ctx => {
	let data = []
	for (let index = 0; index < 10; index++) {
		let temp = {
			CardId: index,
			Name: `姓名-${index}`,
			TelPhone: `电话-${index}`,
			Email: `邮箱-${index}`,
			Role: `角色-${index}`,
			Department: `部门-${index}`,
			UserStatus: Math.floor(Math.random() * 1),
			LoginStatus: Math.floor(Math.random() * 1)
		}
		data.push(temp)
	}
	ctx.body = { data }
})

module.exports = router
