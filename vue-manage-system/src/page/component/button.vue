<template>
    <div>
        <Header></Header>
        <div class="sys-content">
            <leftBar active="0"></leftBar>
            <div class="right-content">
                <Button>Default</Button>
                <Button type="primary">Primary</Button>
                <Button type="ghost">Ghost</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="text">Text</Button>
                <br><br>
                <Button type="info">Info</Button>
                <Button type="success">Success</Button>
                <Button type="warning">Warning</Button>
                <Button type="error">Error</Button>

                <Button type="primary" shape="circle" icon="ios-search"></Button>
                <Button type="primary" icon="ios-search">Search</Button>
                <Button type="primary" shape="circle" icon="ios-search">Search</Button>
                <Button type="primary" shape="circle">Circle</Button>
                <br><br>
                <Button type="ghost" shape="circle" icon="ios-search"></Button>
                <Button type="ghost" icon="ios-search">Search</Button>
                <Button type="ghost" shape="circle" icon="ios-search">Search</Button>
                <Button type="ghost" shape="circle">Circle</Button>
                
                <br />
                <Button type="success" long>SUBMIT</Button>
                <br><br>
                <Button type="error" long>DELETE</Button>
                <br />
                <Button>Default</Button>
                <Button disabled>Default(Disabled)</Button>
                <br>
                <Button type="primary">Primary</Button>
                <Button type="primary" disabled>Primary(Disabled)</Button>
                <br>
                <Button type="ghost">Ghost</Button>
                <Button type="ghost" disabled>Ghost(Disabled)</Button>
                <br>
                <Button type="dashed">Dashed</Button>
                <Button type="dashed" disabled>Dashed(Disabled)</Button>
                <br>
                <Button type="text">Text</Button>
                <Button type="text" disabled>Text(Disabled)</Button>
                
                <h4>Basic</h4>
                <br><br>
                <ButtonGroup>
                    <Button>Cancel</Button>
                    <Button type="primary">Confirm</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button disabled>Yesterday</Button>
                    <Button disabled>Today</Button>
                    <Button disabled>Tomorrow</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button type="primary">L</Button>
                    <Button>M</Button>
                    <Button type="ghost">M</Button>
                    <Button type="dashed">R</Button>
                </ButtonGroup>
                <br><br>
                <h4>Icons</h4>
                <br><br>
                <ButtonGroup>
                    <Button type="primary">
                        <Icon type="chevron-left"></Icon>
                        Backward
                    </Button>
                    <Button type="primary">
                        Forward
                        <Icon type="chevron-right"></Icon>
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button type="primary" icon="ios-skipbackward"></Button>
                    <Button type="primary" icon="ios-skipforward"></Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button type="ghost" icon="ios-color-wand-outline"></Button>
                    <Button type="ghost" icon="ios-sunny-outline"></Button>
                    <Button type="ghost" icon="ios-crop"></Button>
                    <Button type="ghost" icon="ios-color-filter-outline"></Button>
                </ButtonGroup>
                <br><br>
                <h4>Circle</h4>
                <br><br>
                <ButtonGroup shape="circle">
                    <Button type="primary">
                        <Icon type="chevron-left"></Icon>
                        Backward
                    </Button>
                    <Button type="primary">
                        Forward
                        <Icon type="chevron-right"></Icon>
                    </Button>
                </ButtonGroup>
                <ButtonGroup shape="circle">
                    <Button type="primary" icon="ios-skipbackward"></Button>
                    <Button type="primary" icon="ios-skipforward"></Button>
                </ButtonGroup>
                <ButtonGroup shape="circle">
                    <Button type="ghost" icon="ios-color-wand-outline"></Button>
                    <Button type="ghost" icon="ios-sunny-outline"></Button>
                    <Button type="ghost" icon="ios-crop"></Button>
                    <Button type="ghost" icon="ios-color-filter-outline"></Button>
                </ButtonGroup>
                <br><br>
                <h4>Size</h4>
                <br><br>
                <ButtonGroup size="large">
                    <Button type="ghost">Large</Button>
                    <Button type="ghost">Large</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button type="ghost">Default</Button>
                    <Button type="ghost">Default</Button>
                </ButtonGroup>
                <ButtonGroup size="small">
                    <Button type="ghost">Small</Button>
                    <Button type="ghost">Small</Button>
                </ButtonGroup>
                <br><br>
                <ButtonGroup size="large" shape="circle">
                    <Button type="ghost">Large</Button>
                    <Button type="ghost">Large</Button>
                </ButtonGroup>
                <ButtonGroup shape="circle">
                    <Button type="ghost">Default</Button>
                    <Button type="ghost">Default</Button>
                </ButtonGroup>
                <ButtonGroup size="small" shape="circle">
                    <Button type="ghost">Small</Button>
                    <Button type="ghost">Small</Button>
                </ButtonGroup>
                
            </div>
            
        </div>

    </div>
</template>

<script>
import Header from '../../components/header.vue'
import leftBar from '../../components/leftBar.vue'
export default {
  components:{Header,leftBar},  
  created () {

    
  }
}
</script>