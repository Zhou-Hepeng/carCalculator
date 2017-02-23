<template>
	<div class="sidebar-menu">
		<header class="header-gobal">
			 <span class='close'>关</span>
			交强险
		</header>
		<div class="sidebar-content">
			<ul class="genre">
				<li>运营</li>
				<li class="active">非运营</li>
			</ul>
			<ul class="number">
				<li class="selected">2吨以下</li>
				<li>2-5吨</li>
				<li>5-10吨</li>
				<li>10吨以上</li>
			</ul>
		</div>
		</div>
</template>

<script>

</script>

<style lang="less">
	.sidebar-tab{
		position: fixed;
		top: 0;
		right: -100%;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.6);
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
    	.sidebar-menu{
    		height: 100%;
    		overflow: auto;
    		-webkit-overflow-scrolling: touch;
    		background: #f7f9fa;

				.sidebar-content{
					display: -webkit-box;
					display: -ms-flexbox;
					display:flex;
					height: auto;
					min-height: ~'calc(100vh - 44px)';
					.genre{
	    			-webkit-box-flex:1;
	    			-moz-box-flex: 1;
	    			-ms-flex:1;
	    			flex: 1;
	    			li{
							padding-left: 15px;
	    				height: 50px;
	    				line-height: 50px;
	    				font-size: 16px;
	    				color: #333;
	    				&.active{
	    					color: #0083e6;
	    					background: #fff;
	    				}
	    			}
	    		}
	    		.number{
	    			padding-left: 15px;
	    			background: #fff;
	    			-webkit-box-flex:1;
	    			-moz-box-flex: 1;
	    			-ms-flex:1;
	    			flex: 1;
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
					        border-top: 1px solid #e5e5e5;
					        color: #e5e5e5;
					        -webkit-transform-origin: 0 0;
					        transform-origin: 0 0;
					        -webkit-transform: scaleY(.5);
					        transform: scaleY(.5);
	    				}
	    				&:last-child:before{border: none;}
	    				&.selected{
	    					color: #0083e6;
	    					&:after{
	    						position: absolute;
	    						right: 16px;
	    						top: 0;
	    						content: "\5bf9";
									font-size:14px;
	    						font-family: 'calculator';
	    					}
	    				}
	    			}
	    		}
				}
    	}
	}
</style>
