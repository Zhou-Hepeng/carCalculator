<template lang="html">
    <div class="sidebar-content">
      <div class="brand" ref="brand">
        <header class="header-gobal">
           <span class='close'>关</span>
          选择品牌
        </header>
        <div class="sidebar-module">
          <header>
            A
          </header>
          <ul>
            <li>
              <figure><img src="https://img4.kcimg.cn/imgser/201605230115411fdc15f07033.png!120" alt=""></figure>
              <figcaption>奥驰汽车</figcaption>
            </li>
            <li>
              <figure><img src="https://img4.kcimg.cn/imgser/20160707110107d42b50cee8af.png!120" alt=""></figure>
              <figcaption>奥驰汽车</figcaption>
            </li>
            <li>
              <figure><img src="https://img8.kcimg.cn/2016/06/7741464775249.png" alt=""></figure>
              <figcaption>奥驰汽车</figcaption>
            </li>
          </ul>
        </div>
        <div class="sidebar-module">
          <header>
            B
          </header>
          <ul>
            <li>
              <figure><img src="https://img4.kcimg.cn/imgser/201605230115411fdc15f07033.png!120" alt=""></figure>
              <figcaption>奥驰汽车</figcaption>
            </li>
            <li>
              <figure><img src="https://img4.kcimg.cn/imgser/201605230115411fdc15f07033.png!120" alt=""></figure>
              <figcaption>奥驰汽车</figcaption>
            </li>
            <li>
              <figure><img src="https://img4.kcimg.cn/imgser/201605230115411fdc15f07033.png!120" alt=""></figure>
              <figcaption>奥驰汽车</figcaption>
            </li>
          </ul>
        </div>
        <div class="sidebar-module">
          <header>
            C
          </header>
          <ul>
            <li>
              <figure><img src="https://img4.kcimg.cn/imgser/201605230115411fdc15f07033.png!120" alt=""></figure>
              <figcaption>奥驰汽车</figcaption>
            </li>
            <li>
              <figure><img src="https://img4.kcimg.cn/imgser/201605230115411fdc15f07033.png!120" alt=""></figure>
              <figcaption>奥驰汽车</figcaption>
            </li>
            <li>
              <figure><img src="https://img4.kcimg.cn/imgser/201605230115411fdc15f07033.png!120" alt=""></figure>
              <figcaption>奥驰汽车</figcaption>
            </li>
          </ul>
        </div>
      </div>

      <div class="series content-hook" :class="{'visible': currentPage >= 2}" @click="hide" ref="series">
        <header class="header-gobal">
           <span class='close' @click="hiddenAll">关</span>
           选择车系
           <span class="back" @click="--page">返回上级</span>
        </header>
        <div class="series-nav">
    		    <div class="series-list">
    		    	<header>自卸车</header>
    		    	<ul>
    		    		<li>
    		    			奥驰X系自卸车
    		    		</li>
    		    		<li>
    		    			奥驰T系自卸车
    		    		</li>
    		    	</ul>
    		    </div>
    		    <div class="series-list">
    		    	<header>载货车</header>
    		    	<ul>
    		    		<li>
    		    			奥驰D系载货车
    		    		</li>
    		    		<li>
    		    			奥驰悦菱载货车
    		    		</li>
    		    		<li>
    		    			奥驰A系载货车
    		    		</li>
    		    		<li>
    		    			奥驰V系载货车
    		    		</li>
    		    	</ul>
    		    </div>
    		</div>
      </div>

      <div class="car-model content-hook" :class="{'visible': currentPage == 3}" @click="hide" ref="carModel">
        <header class="header-gobal">
           <span class='close' @click="hiddenAll">关</span>
           选择车型
           <span class="back"  @click="--page">返回上级</span>
        </header>
        <div class="model-list">
    		    <ul>
    		    	<li>
    		    		领航版 460马力 6X4牵引车
    		    	</li>
    		    	<li>
    		    		60周年纪念版 460马力 6X4牵引车
    		    	</li>
    		    	<li>
    		    		500马力 6X4牵引车
    		    	</li>
    		    	<li>
    		    		领航版 420马力 6X4牵引车
    		    	</li>
    		    	<li>
    		    		轻量化版 350马力 6X4牵引车
    		    	</li>
    		    	<li>
    		    		寒区版 420马力 6X4牵引车
    		    	</li>
    		    	<li>
    		    		460马力 6X2牵引车(自动挡)
    		    	</li>
    		    	<li>
    		    		领航版复合型 460马力 6X4牵引车
    		    	</li>
    		    	<li>
    		    		精装版 460马力 6X2牵引车
    		    	</li>
    		    	<li>
    		    		领航版复合型 460马力 6X4牵引车
    		    	</li>
    		    	<li>
    		    		舒适版 500马力 6X4牵引车
    		    	</li>
    		    </ul>
    		</div>
      </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1
    }
  },
  computed:{
    currentPage(){
      return this.page;
    }
  },
  methods:{
    hiddenAll(){
      this.page = 1;
    },
    hide(){
      if(event.target.classList.contains('content-hook')){
        this.page--;
      }
    }
  },
  created(){
    this.$nextTick(function(){
      let vm = this;
      let brandObj = this.$refs.brand;
      let seriesObj = this.$refs.series;
      let carObj = this.$refs.careModel;

      brandObj.addEventListener('click',function(e){
        if(e.target.tagName == 'LI' || e.target.tagName == 'FIGURE' || e.target.tagName == 'FIGCAPTION'){
          vm.page++;
        }
      });

      seriesObj.addEventListener('click',function(e){
        if(e.target.tagName == 'LI'){
          vm.page++;
        }
      });
    })
  }
}
</script>

<style lang="less">
.sidebar{
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.6);
  padding-left: 75px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 12;
  -webkit-transition: transform .3s ease-out;
  transition: transform .3s ease-out;
  &.visible{
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
  }
  .header-gobal{
    position: relative;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: rgba(250,251,252,1);
    &:after{
      content: "";
      position: absolute;
      left: 0;
      top: 100%;
      width: 100%;
      height: 1px;
      border-top: 1px solid #d9d9d9;
      color: #d9d9d9;
      transform-origin: 0 0;
      transform: scaleY(0.5)
    }
    .close{
      position:absolute;
      width: 44px;
      top:0;
      left:0;
      color:#0083E6;
      font-family: 'calculator'
    }
    .back{
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      font-size: 16px;
      color: #0083E6;
      line-height: 28px;
    }
  }
  .sidebar-content{
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #F7F9FA;
    z-index: 15;
    .brand{
      .sidebar-module{
        header{
          height:30px;
          line-height: 30px;
          padding-left: 15px;
          color:#999;
        }
        ul{
          position: relative;
          padding-left: 15px;
          background-color:#fff;
          &:before,&:after{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 1px;
            border-top: 1px solid #d9d9d9;
            color: #d9d9d9;
            transform-origin: 0 0;
            transform: scaleY(0.5);
          }
          &:after{
            top:100%;
          }
          li{
            position: relative;
            height:60px;
            padding-left: 85px;
            line-height: 60px;
            &:after{
              content: "";
              position: absolute;
              left: 0;
              top:100%;
              width: 100%;
              height: 1px;
              border-top: 1px solid #d9d9d9;
              color: #d9d9d9;
              transform-origin: 0 0;
              transform: scaleY(0.5);
            }
            &:last-of-type{
              &:after{
                display: none;
              }
            }
            figure{
              position: absolute;
              top:10px;
              left:15px;
              width: 60px;
              height: 40px;
              vertical-align: middle;
              img{
                max-width: 100%;
              }
            }
          }
        }
      }
    }

    .series{
  		position: fixed;
  		top: 0;
  		right: -100%;
  		width: 100%;
  		height: 100%;
  		// background: rgba(0,0,0,.6);
  		padding-left: 75px;
  		-webkit-box-sizing: border-box;
      	box-sizing: border-box;
      	overflow: hidden;
      	z-index: 12;
      	-webkit-transition: transform .3s ease-out;
      	transition: transform .3s ease-out;
      	&.visible{
  			-webkit-transform: translate3d(-100%,0,0);
      		transform: translate3d(-100%,0,0);
      	}
      	.series-nav{
      		height: 100%;
      		overflow: auto;
      		-webkit-overflow-scrolling: touch;
      		background: #f5f5f5;
      		.series-list{
      			overflow: hidden;
      			header{
      				position: relative;
      				height: 28px;
      				line-height: 28px;
      				text-align: left;
      				padding-left: 15px;
      				font-size: 14px;
      				color: #999;
      				padding-right: 0;
      				background: #f7f9fa;
      				&:before{
  						content: " ";
  				        position: absolute;
  				        left: 0;
  				        bottom: 0;
  				        width: 100%;
  				        height: 1px;
  				        border-top: 1px solid #d8d8d8;
  				        color: #d8d8d8;
  				        -webkit-transform-origin: 0 0;
  				        transform-origin: 0 0;
  				        -webkit-transform: scaleY(.5);
  				        transform: scaleY(.5);
      				}
      				&:after{
      					content: " ";
  				        position: absolute;
  				        left: 0;
  				        top: 0;
  				        width: 100%;
  				        height: 1px;
  				        border-top: 1px solid #d8d8d8;
  				        color: #d8d8d8;
  				        -webkit-transform-origin: 0 0;
  				        transform-origin: 0 0;
  				        -webkit-transform: scaleY(.5);
  				        transform: scaleY(.5);
      				}
      			}
      			ul{
      				background: #fff;
      				padding-left: 15px;
      				li{
      					position: relative;
      					height: 50px;
      					line-height: 50px;
      					font-size: 16px;
      					color: #333;
      					&:before{
  							content: " ";
  					        position: absolute;
  					        left: 0;
  					        bottom: 0;
  					        width: 100%;
  					        height: 1px;
  					        border-top: 1px solid #d8d8d8;
  					        color: #d8d8d8;
  					        -webkit-transform-origin: 0 0;
  					        transform-origin: 0 0;
  					        -webkit-transform: scaleY(.5);
  					        transform: scaleY(.5);
      					}
      					&:last-child:before{
      						border: none;
      					}
      				}
      			}
      		}
      	}

  	}
    .car-model{
  		position: fixed;
  		top: 0;
  		right: -100%;
  		width: 100%;
  		height: 100%;
  		// background: rgba(0,0,0,.6);
  		padding-left: 75px;
  		-webkit-box-sizing: border-box;
      	box-sizing: border-box;
      	overflow: hidden;
      	z-index: 12;
      	-webkit-transition: transform .3s ease-out;
      	transition: transform .3s ease-out;
      	&.visible{
      		-webkit-transform: translate3d(-100%,0,0);
      		transform: translate3d(-100%,0,0);
      	}
      	.model-list{
      		height: 100%;
      		overflow: auto;
  			background: #fff;
      		-webkit-overflow-scrolling: touch;
  			ul{
  				overflow: hidden;
  				padding-left: 15px;
  				li{
  					height: 50px;
  					line-height: 50px;
  					font-size: 16px;
  					color: #333;
  					border-bottom: 1px solid #e5e5e5;
  					&:last-child{border: none;}
  				}
  			}
  		}
  	}
  }
}
</style>
