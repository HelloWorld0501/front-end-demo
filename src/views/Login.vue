<template>
    <Form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left"
          class="login-container">
        <span class="tool-bar"></span>
        <h2 class="title">系统登录</h2>
        <FormItem prop="account">
            <Input type="text" v-model="loginForm.account" autocomplete="off" placeholder="账号"></Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" autocomplete="off" placeholder="密码"></Input>
        </FormItem>
        <FormItem>
            <Row>
                <Col :span="12">
                    <FormItem prop="captcha">
                        <Input type="text" v-model="loginForm.captcha" autocomplete="off" placeholder="验证码,单击刷新"
                               style="width: 100%"></Input>
                    </FormItem>
                </Col>
                <Col :span="12">
                    <FormItem>
                        <img style="width: 100%;border-radius:3px;" :src="loginForm.src" @click="refreshCaptcha">
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
        <FormItem>
            <Row>
                <Col :span="12">
                    <Button type="primary" long @click.native.prevent="reset">重置</Button>
                </Col>
                <Col :span="12">
                    <Button type="primary" long :loading="loading" @click.native.prevent="login">登录
                    </Button>
                </Col>
            </Row>
        </FormItem>
    </Form>
</template>

<script>

    export default {
        name: "Login",
        data() {
            return {
                loading: false,
                loginForm: {
                    account: 'admin',
                    password: 'admin',
                    captcha: '',
                    src: ''
                },
                fieldRules: {
                    account: [
                        {required: true, message: '请输入账号', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                },
                checked: true
            }
        },
        methods: {
            login() {
                this.loading = true
                // let userInfo = {
                //     account: this.loginForm.account,
                //     password: this.loginForm.password,
                //     captcha: this.loginForm.captcha
                // }
                let userInfo = {
                    account: 'admin',
                    password: 'admin',
                    captcha: '11111'
                }
                this.$store.dispatch('user/userLogin',userInfo).then(() => {
                    this.loading = false
                    this.$router.push({path: '/'})
                }).catch(() => {
                    this.loading = false
                })
            },
            refreshCaptcha: function () {
                this.loginForm.src = this.global.baseUrl + "/captcha.jpg?t=" + new Date().getTime();
            },
            reset() {
                this.$refs.loginForm.resetFields()
            }
        },
        beforeCreate: function () {
        },
        created: function () {
        },
        beforeMonut: function () {
        },
        mounted: function () {
            this.refreshCaptcha()
        },
        updated: function () {
        },
        beforeDestory: function () {
        },
        Destoryed: function () {
        }
    }
</script>

<style lang="scss" scoped>
    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 100px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;

        .title {
            margin: 0px auto 30px auto;
            text-align: center;
            color: #505458;
        }
    }
</style>
