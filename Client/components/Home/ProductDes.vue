<template>
  <div class="product-desc">
    <div class="product-desc_title">{{ productInfo.title }}</div>
    <div class="product-desc_subtitle">{{ productInfo.subTitle }}</div>
    <b-container class="content">
      <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="3" class="content_row">
        <template v-for="item in productInfo.items">
          <b-col :key="item.key" class="content_col">
            <div class="item-detail">
              <div class="d-flex justify-content-start align-items-center">
                <img
                  class="align-self-center"
                  style="width:33px;height:33px;"
                  src="http://localhost:6010/img/icon.png"
                />
                <span class="ml-3">{{ item.title }}</span>
              </div>
              <div class="bottom">{{ item.description }}</div>
            </div>
          </b-col>
        </template>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ProductDesc',
  props: {
    productInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.product-desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  &_title {
    padding-bottom: 10px;
    font-size: 24px;
    color: #333333;
  }
  &_subtitle {
    font-size: 16px;
    color: #666666;
  }
  .content {
    margin-top: 40px;
    &_col {
      margin-bottom: 20px;
    }
    .item-detail {
      background-color: #ffffff;
      padding: 24px 24px 28px;
      display: flex;
      flex-direction: column;
      &:hover {
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        .top > span {
          color: #00bcc8;
        }
      }
      .top {
        display: flex;
        margin-bottom: 10px;
        position: relative;
        div {
          position: absolute;
          left: 0;
          top: 2px;
          width: 33px;
          height: 33px;
          img {
            max-width: 100%;
          }
        }
        span {
          margin-left: 50px;
          font-size: 20px;
          color: #333333;
        }
      }
      .bottom {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
