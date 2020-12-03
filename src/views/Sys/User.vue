<template>
    <!--<div class="container">-->
    <!--    <div style="flex:1;">-->
    <!--        <div class="header">-->
    <!--            <div>-->
    <!--                <Form inline>-->
    <!--                    <FormItem prop="user">-->
    <!--                        <Input type="text" v-model="username" placeholder="用户名">-->
    <!--                            <Icon custom="fa fa-user" slot="prepend"></Icon>-->
    <!--                        </Input>-->
    <!--                    </FormItem>-->
    <!--                    <FormItem>-->
    <!--                        <PermissButton icon="md-search" perms="sys:role:view" @click="handleSubmit"-->
    <!--                                       labelText="查询"></PermissButton>-->
    <!--                    </FormItem>-->
    <!--                    <FormItem>-->
    <!--                        <PermissButton icon="md-add" perms="sys:user:add" @click="handleSubmit"-->
    <!--                                       labelText="新增"></PermissButton>-->
    <!--                    </FormItem>-->
    <!--                </Form>-->
    <!--            </div>-->
    <!--            <div>-->
    <!--                <Form inline>-->
    <!--                    <FormItem>-->
    <!--                        <ButtonGroup>-->
    <!--                            <Tooltip transfer="true" content="刷新" placement="top">-->
    <!--                                <Button icon="md-refresh"></Button>-->
    <!--                            </Tooltip>-->
    <!--                            <Tooltip transfer="true" content="筛选列" placement="top">-->
    <!--                                <Button icon="md-funnel"></Button>-->
    <!--                            </Tooltip>-->
    <!--                            <Tooltip transfer="true" content="导出" placement="top">-->
    <!--                                <Button icon="md-download"></Button>-->
    <!--                            </Tooltip>-->
    <!--                        </ButtonGroup>-->
    <!--                    </FormItem>-->
    <!--                </Form>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--        <div class="main">-->
    <!--        </div>-->
    <!--    </div>-->
    <!--    <div class="footer">-->
    <!--        <Page :total="pageTotal" :current="pageNum"-->
    <!--              :page-size="pageSize" show-elevator show-sizer show-total-->
    <!--              placement="top" @on-change="handlePage" @on-page-size-change='handlePageSize'></Page>-->
    <!--    </div>-->
    <!--</div>-->
</template>

<script>
    import PermissButton from '@/views/core/PermissButton'

    export default {
        components: {
            PermissButton
        },
        name: 'User',
        data() {
            return {
                username: ''
            }
        },
        methods: {
            handleSubmit() {
                console.log(1)
            }
        },
        beforeCreate: function () {
        },
        created: function () {
        },
        beforeMonut: function () {
        },
        mounted: function () {
        },
        updated: function () {
        },
        beforeDestory: function () {
        },
        Destoryed: function () {
        }
    }
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }


    .header {
        display: flex;
        justify-content: space-between;
    }

    .main {
        width: 100%;
        background-color: #bdb76b;
    }

    .footer {

        display: flex;
        justify-content: flex-end;
        background-color: #ffc0cb;
    }
</style>
