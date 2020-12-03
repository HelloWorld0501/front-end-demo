<template>
    <div class="tags-nav">
        <!--关闭全部与关闭其他-->
        <div class="close-con">
            <Dropdown transfer @on-click="handleTagsOption" style="margin-top: 7px;">
                <Button size="small" type="text">
                    <Icon :size="18" type="ios-close-circle-outline"/>
                </Button>
                <DropdownMenu slot="list">
                    <DropdownItem name="close-all">关闭所有</DropdownItem>
                    <DropdownItem name="close-others">关闭其他</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <ul v-show="visible" :style="{left: contextMenuLeft + 'px',top:contextMenuTop+'px'}" class="contextmenu">
            <li v-for="(item,index) of menuList" @click="handleTagsOption(index)">{{item}}</li>
        </ul>
        <!--向左移动-->
        <div class="btn-con left-btn">
            <Button type="text" @click="handleScroll(240)">
                <Icon :size="18" type="ios-arrow-back"/>
            </Button>
        </div>
        <!--x向右移动-->
        <div class="btn-con right-btn">
            <Button type="text" @click="handleScroll(-240)">
                <Icon :size="18" type="ios-arrow-forward"/>
            </Button>
        </div>
        <!--标签页-->
        <div class="scroll-outer" ref="scrollOuter" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll">
            <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
                <transition-group name="taglist-moving-animation">
                    <Tag
                            type="dot"
                            v-for="(item, index) in list"
                            ref="tagsPageOpened"
                            :key="`tag-nav-${index}`"
                            :name="item.name"
                            :data-route-item="item"
                            @on-close="handleClose(item)"
                            @click.native="handleClick(item)"
                            :closable="item.name !== '首页'"
                            :color="isCurrentTag(item) ? 'primary' : 'default'"
                            @contextmenu.prevent.native="contextMenu(item, $event)"
                    >{{ item.name }}
                    </Tag>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tags",
        props: {
            list: {
                type: Array,
                default: ''
            }
        },
        data() {
            return {
                tagBodyLeft: 0,
                rightOffset: 40,
                visible: false,
                contextMenuLeft: 0,
                contextMenuTop: 0,
                menuList: {
                    others: '关闭其他',
                    all: '关闭所有'
                }
            }
        },
        methods: {
            isCurrentTag(item){
                this.$route.name === ''
            },
            handleTagsOption(type) {
                console.log(type === 'close-all')
            },
            handlescroll(e) {
                let type = e.type
                let offset = 0
                if (type === 'DOMMouseScroll' || type === 'mousewheel') {
                    offset = e.wheelDelta ? e.wheelDelta : -(e.detail || 0) * 40
                }
                this.handleScroll(offset)
            },
            handleScroll(offset) {
                let outerWidth = this.$refs.scrollOuter.offsetWidth
                let bodyWidth = this.$refs.scrollBody.offsetWidth
                if (offset > 0) {
                    this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
                } else {
                    if (outerWidth < bodyWidth) {
                        if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
                            this.tagBodyLeft = this.tagBodyLeft
                        } else {
                            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
                        }
                    } else {
                        this.tagBodyLeft = 0
                    }
                }
            }
        },
        beforeCreate: function () {
        }
        ,
        created: function () {
        }
        ,
        beforeMonut: function () {
        }
        ,
        mounted: function () {
        }
        ,
        updated: function () {
        }
        ,
        beforeDestory: function () {
        }
        ,
        Destoryed: function () {
        }
    }
</script>

<style lang="scss" scoped>

    .tags-nav {
        position: relative;
        border-top: 1px solid #F0F0F0;
        border-bottom: 1px solid #F0F0F0;
        width: 100%;
        height: 100%;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        .close-con {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 32px;
            background: #fff;
            text-align: center;
            z-index: 10;
        }

        .btn-con {
            position: absolute;
            top: 0px;
            height: 100%;
            background: #fff;
            padding-top: 3px;
            z-index: 10;

            button {
                padding: 6px 4px;
                line-height: 14px;
                text-align: center;
            }

            &.left-btn {
                left: 0px;
            }

            &.right-btn {
                right: 32px;
                border-right: 1px solid #F0F0F0;
            }
        }

        .scroll-outer {
            position: absolute;
            left: 28px;
            right: 61px;
            top: 0;
            bottom: 0;
            box-shadow: 0px 0 3px 2px rgba(100, 100, 100, .1) inset;

            .scroll-body {
                height: calc(100% - 1px);
                display: inline-block;
                padding: 1px 4px 0;
                position: absolute;
                overflow: visible;
                white-space: nowrap;
                transition: left .3s ease;

                .ivu-tag-dot-inner {
                    transition: background .2s ease;
                }
            }
        }

        .contextmenu {
            position: absolute;
            margin: 0;
            padding: 5px 0;
            background: #fff;
            z-index: 1000;
            list-style-type: none;
            border-radius: 4px;
            box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .1);

            li {
                margin: 0;
                padding: 5px 15px;
                cursor: pointer;

                &:hover {
                    background: #eee;
                }
            }
        }
    }
</style>
