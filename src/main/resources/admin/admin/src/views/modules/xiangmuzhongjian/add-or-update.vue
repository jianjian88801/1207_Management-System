<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="项目名称" prop="xiangmumingcheng">
          <el-input v-model="ruleForm.xiangmumingcheng" 
              placeholder="项目名称" clearable  :readonly="ro.xiangmumingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="项目名称" prop="xiangmumingcheng">
              <el-input v-model="ruleForm.xiangmumingcheng" 
                placeholder="项目名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="项目类型" prop="xiangmuleixing">
          <el-select v-model="ruleForm.xiangmuleixing" placeholder="请选择项目类型">
            <el-option
                v-for="(item,index) in xiangmuleixingOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="项目类型" prop="xiangmuleixing">
	      <el-input v-model="ruleForm.xiangmuleixing"
                placeholder="项目类型" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="项目描述" prop="xiangmumiaoshu">
          <el-input v-model="ruleForm.xiangmumiaoshu" 
              placeholder="项目描述" clearable  :readonly="ro.xiangmumiaoshu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="项目描述" prop="xiangmumiaoshu">
              <el-input v-model="ruleForm.xiangmumiaoshu" 
                placeholder="项目描述" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="学生团队" prop="xueshengtuandui">
          <el-input v-model="ruleForm.xueshengtuandui" 
              placeholder="学生团队" clearable  :readonly="ro.xueshengtuandui"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="学生团队" prop="xueshengtuandui">
              <el-input v-model="ruleForm.xueshengtuandui" 
                placeholder="学生团队" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="成员介绍" prop="chengyuanjieshao">
          <el-input v-model="ruleForm.chengyuanjieshao" 
              placeholder="成员介绍" clearable  :readonly="ro.chengyuanjieshao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="成员介绍" prop="chengyuanjieshao">
              <el-input v-model="ruleForm.chengyuanjieshao" 
                placeholder="成员介绍" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="立项时间" prop="lixiangshijian">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.lixiangshijian" 
                type="date"
                placeholder="立项时间">
            </el-date-picker> 
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.lixiangshijian" label="立项时间" prop="lixiangshijian">
              <el-input v-model="ruleForm.lixiangshijian" 
                placeholder="立项时间" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="计划结束时间" prop="jihuajieshushijian">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.jihuajieshushijian" 
                type="date"
                placeholder="计划结束时间">
            </el-date-picker> 
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.jihuajieshushijian" label="计划结束时间" prop="jihuajieshushijian">
              <el-input v-model="ruleForm.jihuajieshushijian" 
                placeholder="计划结束时间" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="项目成员是否变化" prop="xiangmuchengyuanshifoubianhua">
          <el-select v-model="ruleForm.xiangmuchengyuanshifoubianhua" placeholder="请选择项目成员是否变化">
            <el-option
                v-for="(item,index) in xiangmuchengyuanshifoubianhuaOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="项目成员是否变化" prop="xiangmuchengyuanshifoubianhua">
	      <el-input v-model="ruleForm.xiangmuchengyuanshifoubianhua"
                placeholder="项目成员是否变化" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="能否按时完成计划" prop="nengfouanshiwanchengjihua">
          <el-select v-model="ruleForm.nengfouanshiwanchengjihua" placeholder="请选择能否按时完成计划">
            <el-option
                v-for="(item,index) in nengfouanshiwanchengjihuaOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="能否按时完成计划" prop="nengfouanshiwanchengjihua">
	      <el-input v-model="ruleForm.nengfouanshiwanchengjihua"
                placeholder="能否按时完成计划" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="24">  
        <el-form-item class="upload" v-if="type!='info'" label="文件" prop="wenjian">
          <file-upload
          tip="点击上传文件"
          action="file/upload"
          :limit="1"
          :multiple="true"
          :fileUrls="ruleForm.wenjian?ruleForm.wenjian:''"
          @change="wenjianUploadChange"
          ></file-upload>
        </el-form-item>  
        <div v-else>
          <el-form-item v-if="ruleForm.wenjian" label="文件" prop="wenjian">
            <el-button type="text" size="small" @click="download(ruleForm.wenjian)">下载</el-button>
          </el-form-item>
        </div>    
      </el-col>      
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="账号" prop="zhanghao">
          <el-input v-model="ruleForm.zhanghao" 
              placeholder="账号" clearable  :readonly="ro.zhanghao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="账号" prop="zhanghao">
              <el-input v-model="ruleForm.zhanghao" 
                placeholder="账号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="姓名" prop="xingming">
          <el-input v-model="ruleForm.xingming" 
              placeholder="姓名" clearable  :readonly="ro.xingming"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="姓名" prop="xingming">
              <el-input v-model="ruleForm.xingming" 
                placeholder="姓名" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item class="textarea" v-if="type!='info'" label="项目进展情况" prop="xiangmujinzhanqingkuang">
                <el-input
                  style="min-width: 200px; max-width: 600px;"
                  type="textarea"
                  :rows="8"
                  placeholder="项目进展情况"
                  v-model="ruleForm.xiangmujinzhanqingkuang" >
                </el-input>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.xiangmujinzhanqingkuang" label="项目进展情况" prop="xiangmujinzhanqingkuang">
                    <span>{{ruleForm.xiangmujinzhanqingkuang}}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item class="textarea" v-if="type!='info'" label="前旗经费使用情况" prop="qianqijingfeishiyongqingkuang">
                <el-input
                  style="min-width: 200px; max-width: 600px;"
                  type="textarea"
                  :rows="8"
                  placeholder="前旗经费使用情况"
                  v-model="ruleForm.qianqijingfeishiyongqingkuang" >
                </el-input>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.qianqijingfeishiyongqingkuang" label="前旗经费使用情况" prop="qianqijingfeishiyongqingkuang">
                    <span>{{ruleForm.qianqijingfeishiyongqingkuang}}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item class="textarea" v-if="type!='info'" label="其他需说明的问题" prop="qitaxushuomingdewenti">
                <el-input
                  style="min-width: 200px; max-width: 600px;"
                  type="textarea"
                  :rows="8"
                  placeholder="其他需说明的问题"
                  v-model="ruleForm.qitaxushuomingdewenti" >
                </el-input>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.qitaxushuomingdewenti" label="其他需说明的问题" prop="qitaxushuomingdewenti">
                    <span>{{ruleForm.qitaxushuomingdewenti}}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item class="textarea" v-if="type!='info'" label="指导老师意见" prop="zhidaolaoshiyijian">
                <el-input
                  style="min-width: 200px; max-width: 600px;"
                  type="textarea"
                  :rows="8"
                  placeholder="指导老师意见"
                  v-model="ruleForm.zhidaolaoshiyijian" >
                </el-input>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.zhidaolaoshiyijian" label="指导老师意见" prop="zhidaolaoshiyijian">
                    <span>{{ruleForm.zhidaolaoshiyijian}}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item class="textarea" v-if="type!='info'" label="院系管理员意见" prop="yuanxiguanliyuanyijian">
                <el-input
                  style="min-width: 200px; max-width: 600px;"
                  type="textarea"
                  :rows="8"
                  placeholder="院系管理员意见"
                  v-model="ruleForm.yuanxiguanliyuanyijian" >
                </el-input>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.yuanxiguanliyuanyijian" label="院系管理员意见" prop="yuanxiguanliyuanyijian">
                    <span>{{ruleForm.yuanxiguanliyuanyijian}}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
      <el-form-item class="btn">
        <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"rgba(37, 35, 35, 0.68)","selectFontSize":"14px","btnCancelBorderColor":"rgba(238, 237, 229, 0.33)","inputBorderRadius":"20px","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"14px","textareaBorderRadius":"20px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"20px","uploadLableFontSize":"14px","textareaBorderWidth":"1px","inputLableColor":"rgba(52, 51, 50, 0.88)","addEditBoxColor":"rgba(232, 212, 212, 0.24)","dateIconFontSize":"14px","btnSaveBgColor":"#409EFF","uploadIconFontColor":"#8c939d","textareaBorderColor":"#DCDFE6","btnCancelBgColor":"rgba(231, 242, 112, 0.92)","selectLableColor":"#606266","btnSaveBorderStyle":"solid","dateBorderWidth":"1px","dateLableFontSize":"14px","dateBorderRadius":"20px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"#C0C4CC","btnCancelHeight":"44px","inputHeight":"40px","btnCancelFontColor":"#606266","dateBorderColor":"#DCDFE6","dateIconFontColor":"#C0C4CC","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"#606266","dateFontSize":"14px","inputBorderWidth":"1px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"#606266","uploadHeight":"148px","textareaLableColor":"#606266","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"20px","inputBgColor":"#fff","inputLableFontSize":"14px","uploadLableColor":"#606266","uploadBorderRadius":"20px","btnSaveHeight":"44px","selectBgColor":"#fff","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"40px","selectBorderColor":"#DCDFE6","inputBorderColor":"#DCDFE6","uploadBorderColor":"#DCDFE6","textareaFontColor":"#606266","selectBorderWidth":"1px","dateFontColor":"rgba(159, 111, 85, 0.88)","btnCancelBorderWidth":"1px","uploadBorderWidth":"1px","textareaFontSize":"14px","selectBorderRadius":"20px","selectFontColor":"#606266","btnSaveBorderColor":"#409EFF","btnSaveBorderWidth":"1px"},
      id: '',
      type: '',
      ro:{
	xiangmumingcheng : false,
	xiangmuleixing : false,
	xiangmumiaoshu : false,
	xueshengtuandui : false,
	chengyuanjieshao : false,
	lixiangshijian : false,
	jihuajieshushijian : false,
	xiangmujinzhanqingkuang : false,
	xiangmuchengyuanshifoubianhua : false,
	nengfouanshiwanchengjihua : false,
	qianqijingfeishiyongqingkuang : false,
	qitaxushuomingdewenti : false,
	zhidaolaoshiyijian : false,
	yuanxiguanliyuanyijian : false,
	wenjian : false,
	zhanghao : false,
	xingming : false,
	sfsh : false,
	shhf : false,
      },
      ruleForm: {
        xiangmumingcheng: '',
        xiangmuleixing: '',
        xiangmumiaoshu: '',
        xueshengtuandui: '',
        chengyuanjieshao: '',
        lixiangshijian: '',
        jihuajieshushijian: '',
        xiangmujinzhanqingkuang: '',
        xiangmuchengyuanshifoubianhua: '',
        nengfouanshiwanchengjihua: '',
        qianqijingfeishiyongqingkuang: '',
        qitaxushuomingdewenti: '',
        zhidaolaoshiyijian: '',
        yuanxiguanliyuanyijian: '',
        wenjian: '',
        zhanghao: '',
        xingming: '',
        shhf: '',
      },
          xiangmuleixingOptions: [],
          xiangmuchengyuanshifoubianhuaOptions: [],
          nengfouanshiwanchengjihuaOptions: [],
      rules: {
          xiangmumingcheng: [
                { required: true, message: '项目名称不能为空', trigger: 'blur' },
          ],
          xiangmuleixing: [
                { required: true, message: '项目类型不能为空', trigger: 'blur' },
          ],
          xiangmumiaoshu: [
          ],
          xueshengtuandui: [
          ],
          chengyuanjieshao: [
          ],
          lixiangshijian: [
          ],
          jihuajieshushijian: [
          ],
          xiangmujinzhanqingkuang: [
          ],
          xiangmuchengyuanshifoubianhua: [
          ],
          nengfouanshiwanchengjihua: [
          ],
          qianqijingfeishiyongqingkuang: [
          ],
          qitaxushuomingdewenti: [
          ],
          zhidaolaoshiyijian: [
          ],
          yuanxiguanliyuanyijian: [
          ],
          wenjian: [
          ],
          zhanghao: [
          ],
          xingming: [
          ],
          sfsh: [
          ],
          shhf: [
          ],
      }
    };
  },
  props: ["parent"],
  computed: {
  },
  created() {
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          if(o=='xiangmumingcheng'){
            this.ruleForm.xiangmumingcheng = obj[o];
	    this.ro.xiangmumingcheng = true;
            continue;
          }
          if(o=='xiangmuleixing'){
            this.ruleForm.xiangmuleixing = obj[o];
	    this.ro.xiangmuleixing = true;
            continue;
          }
          if(o=='xiangmumiaoshu'){
            this.ruleForm.xiangmumiaoshu = obj[o];
	    this.ro.xiangmumiaoshu = true;
            continue;
          }
          if(o=='xueshengtuandui'){
            this.ruleForm.xueshengtuandui = obj[o];
	    this.ro.xueshengtuandui = true;
            continue;
          }
          if(o=='chengyuanjieshao'){
            this.ruleForm.chengyuanjieshao = obj[o];
	    this.ro.chengyuanjieshao = true;
            continue;
          }
          if(o=='lixiangshijian'){
            this.ruleForm.lixiangshijian = obj[o];
	    this.ro.lixiangshijian = true;
            continue;
          }
          if(o=='jihuajieshushijian'){
            this.ruleForm.jihuajieshushijian = obj[o];
	    this.ro.jihuajieshushijian = true;
            continue;
          }
          if(o=='xiangmujinzhanqingkuang'){
            this.ruleForm.xiangmujinzhanqingkuang = obj[o];
	    this.ro.xiangmujinzhanqingkuang = true;
            continue;
          }
          if(o=='xiangmuchengyuanshifoubianhua'){
            this.ruleForm.xiangmuchengyuanshifoubianhua = obj[o];
	    this.ro.xiangmuchengyuanshifoubianhua = true;
            continue;
          }
          if(o=='nengfouanshiwanchengjihua'){
            this.ruleForm.nengfouanshiwanchengjihua = obj[o];
	    this.ro.nengfouanshiwanchengjihua = true;
            continue;
          }
          if(o=='qianqijingfeishiyongqingkuang'){
            this.ruleForm.qianqijingfeishiyongqingkuang = obj[o];
	    this.ro.qianqijingfeishiyongqingkuang = true;
            continue;
          }
          if(o=='qitaxushuomingdewenti'){
            this.ruleForm.qitaxushuomingdewenti = obj[o];
	    this.ro.qitaxushuomingdewenti = true;
            continue;
          }
          if(o=='zhidaolaoshiyijian'){
            this.ruleForm.zhidaolaoshiyijian = obj[o];
	    this.ro.zhidaolaoshiyijian = true;
            continue;
          }
          if(o=='yuanxiguanliyuanyijian'){
            this.ruleForm.yuanxiguanliyuanyijian = obj[o];
	    this.ro.yuanxiguanliyuanyijian = true;
            continue;
          }
          if(o=='wenjian'){
            this.ruleForm.wenjian = obj[o];
	    this.ro.wenjian = true;
            continue;
          }
          if(o=='zhanghao'){
            this.ruleForm.zhanghao = obj[o];
	    this.ro.zhanghao = true;
            continue;
          }
          if(o=='xingming'){
            this.ruleForm.xingming = obj[o];
	    this.ro.xingming = true;
            continue;
          }
        }
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
		if(json.zhanghao!=''&&json.zhanghao){
              		this.ruleForm.zhanghao = json.zhanghao
		}
		if(json.xingming!=''&&json.xingming){
              		this.ruleForm.xingming = json.xingming
		}
        } else {
          this.$message.error(data.msg);
        }
      });
            this.$http({
              url: `option/xiangmuleixing/xiangmuleixing`,
              method: "get"
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.xiangmuleixingOptions = data.data;
              } else {
                this.$message.error(data.msg);
              }
            });
         
            this.xiangmuchengyuanshifoubianhuaOptions = "是,否".split(',')
            this.nengfouanshiwanchengjihuaOptions = "是,否".split(',')
    },
    // 多级联动参数
    info(id) {
      this.$http({
        url: `xiangmuzhongjian/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 提交
    onSubmit() {
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}



















      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `xiangmuzhongjian/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.parent.showFlag = true;
                  this.parent.addOrUpdateFlag = false;
                  this.parent.xiangmuzhongjianCrossAddOrUpdateFlag = false;
                  this.parent.search();
                  this.parent.contentStyleChange();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.xiangmuzhongjianCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    wenjianUploadChange(fileUrls) {
	this.ruleForm.wenjian = fileUrls;
			this.addEditUploadStyleChange()
    },
	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}
</style>
