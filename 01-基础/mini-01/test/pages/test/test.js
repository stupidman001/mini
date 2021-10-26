import {
    getSetting,
    chooseAddress,
    openSetting,
    showModal,
    showToast,
    login,
    requestPayment
} from "../../utils/asyncWx";
Page({
    async fun1() {
        // 1 获取 权限状态
        const res1 = await getSetting();
        console.log(res1)
    },
    async fun2() {
        let address = await chooseAddress();
        console.log(address)
    },
    async fun3() {
        let res = await openSetting();
        console.log(res)
    },
    async fun4() {
        const res = await showModal({
            content: "您是否要删除？"
        });
        console.log(res)
    },
    async fun5() {
        await showToast({
            title: "您还没有选择收货地址"
        });
        return;
    },
    async fun6() {
        const {
            code
        } = await login();
        console.log(code)
    },
    async fun7() {
        wx.showLoading({
            title: "加载中",
            mask: true
        });
        setTimeout(() => {
            wx.hideLoading();
        }, 3000)
    },
})