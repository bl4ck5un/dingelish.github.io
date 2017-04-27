var searchIndex = {};
searchIndex["sgx_types"] = {"doc":"","items":[[4,"c_void","sgx_types","",null,null],[0,"types","","",null,null],[3,"sgx_attributes_t","sgx_types::types","",null,null],[12,"flags","","",0,null],[12,"xfrm","","",0,null],[3,"sgx_misc_attribute_t","","",null,null],[12,"secs_attr","","",1,null],[12,"misc_select","","",1,null],[3,"sgx_dh_msg1_t","","",null,null],[12,"g_a","","",2,null],[12,"target","","",2,null],[3,"sgx_dh_msg2_t","","",null,null],[12,"g_b","","",3,null],[12,"report","","",3,null],[12,"cmac","","",3,null],[3,"sgx_dh_msg3_body_t","","",null,null],[12,"report","","",4,null],[12,"additional_prop_length","","",4,null],[12,"additional_prop","","",4,null],[3,"sgx_dh_msg3_t","","",null,null],[12,"cmac","","",5,null],[12,"msg3_body","","",5,null],[3,"sgx_dh_session_enclave_identity_t","","",null,null],[12,"cpu_svn","","",6,null],[12,"misc_select","","",6,null],[12,"reserved_1","","",6,null],[12,"attributes","","",6,null],[12,"mr_enclave","","",6,null],[12,"reserved_2","","",6,null],[12,"mr_signer","","",6,null],[12,"reserved_3","","",6,null],[12,"isv_prod_id","","",6,null],[12,"isv_svn","","",6,null],[3,"sgx_dh_session_t","","",null,null],[12,"sgx_dh_session","","",7,null],[3,"ecc_param_t","","",null,null],[12,"eccP","","",8,null],[12,"eccA","","",8,null],[12,"eccB","","",8,null],[12,"eccG","","",8,null],[12,"eccR","","",8,null],[3,"sgx_cpu_svn_t","","",null,null],[12,"svn","","",9,null],[3,"sgx_key_id_t","","",null,null],[12,"id","","",10,null],[3,"sgx_key_request_t","","",null,null],[12,"key_name","","",11,null],[12,"key_policy","","",11,null],[12,"isv_svn","","",11,null],[12,"reserved1","","",11,null],[12,"cpu_svn","","",11,null],[12,"attribute_mask","","",11,null],[12,"key_id","","",11,null],[12,"misc_mask","","",11,null],[12,"reserved2","","",11,null],[3,"sgx_ra_msg1_t","","",null,null],[12,"g_a","","",12,null],[12,"gid","","",12,null],[3,"sgx_ra_msg2_t","","",null,null],[12,"g_b","","",13,null],[12,"spid","","",13,null],[12,"quote_type","","",13,null],[12,"kdf_id","","",13,null],[12,"sign_gb_ga","","",13,null],[12,"mac","","",13,null],[12,"sig_rl_size","","",13,null],[12,"sig_rl","","",13,null],[3,"sgx_ra_msg3_t","","",null,null],[12,"mac","","",14,null],[12,"g_a","","",14,null],[12,"ps_sec_prop","","",14,null],[12,"quote","","",14,null],[3,"sgx_spid_t","","",null,null],[12,"id","","",15,null],[3,"sgx_basename_t","","",null,null],[12,"name","","",16,null],[3,"sgx_quote_nonce_t","","",null,null],[12,"rand","","",17,null],[3,"sgx_update_info_bit_t","","",null,null],[12,"ucodeUpdate","","",18,null],[12,"csmeFwUpdate","","",18,null],[12,"pswUpdate","","",18,null],[3,"sgx_quote_t","","",null,null],[12,"version","","",19,null],[12,"sign_type","","",19,null],[12,"epid_group_id","","",19,null],[12,"qe_svn","","",19,null],[12,"pce_svn","","",19,null],[12,"xeid","","",19,null],[12,"basename","","",19,null],[12,"report_body","","",19,null],[12,"signature_len","","",19,null],[12,"signature","","",19,null],[3,"sgx_platform_info_t","","",null,null],[12,"platform_info","","",20,null],[3,"sgx_measurement_t","","",null,null],[12,"m","","",21,null],[3,"sgx_report_data_t","","",null,null],[12,"d","","",22,null],[3,"sgx_target_info_t","","",null,null],[12,"mr_enclave","","",23,null],[12,"attributes","","",23,null],[12,"reserved1","","",23,null],[12,"misc_select","","",23,null],[12,"reserved2","","",23,null],[3,"sgx_report_body_t","","",null,null],[12,"cpu_svn","","",24,null],[12,"misc_select","","",24,null],[12,"reserved1","","",24,null],[12,"attributes","","",24,null],[12,"mr_enclave","","",24,null],[12,"reserved2","","",24,null],[12,"mr_signer","","",24,null],[12,"reserved3","","",24,null],[12,"isv_prod_id","","",24,null],[12,"isv_svn","","",24,null],[12,"reserved4","","",24,null],[12,"report_data","","",24,null],[3,"sgx_report_t","","",null,null],[12,"body","","",25,null],[12,"key_id","","",25,null],[12,"mac","","",25,null],[3,"sgx_mc_uuid_t","","",null,null],[12,"counter_id","","",26,null],[12,"nonce","","",26,null],[3,"sgx_ps_sec_prop_desc_t","","",null,null],[12,"sgx_ps_sec_prop_desc","","",27,null],[3,"sgx_ec256_dh_shared_t","","",null,null],[12,"s","","",28,null],[3,"sgx_ec256_private_t","","",null,null],[12,"r","","",29,null],[3,"sgx_ec256_public_t","","",null,null],[12,"gx","","",30,null],[12,"gy","","",30,null],[3,"sgx_ec256_signature_t","","",null,null],[12,"x","","",31,null],[12,"y","","",31,null],[3,"sgx_thread_queue_t","","",null,null],[12,"m_first","","",32,null],[12,"m_last","","",32,null],[3,"sgx_thread_mutex_t","","",null,null],[12,"m_refcount","","",33,null],[12,"m_control","","",33,null],[12,"m_lock","","",33,null],[12,"m_owner","","",33,null],[12,"m_queue","","",33,null],[3,"sgx_thread_mutexattr_t","","",null,null],[12,"m_dummy","","",34,null],[3,"sgx_thread_condattr_t","","",null,null],[12,"m_dummy","","",35,null],[3,"sgx_thread_cond_t","","",null,null],[12,"m_lock","","",36,null],[12,"m_queue","","",36,null],[3,"sgx_cpu_context_t","","",null,null],[12,"rax","","",37,null],[12,"rcx","","",37,null],[12,"rdx","","",37,null],[12,"rbx","","",37,null],[12,"rsp","","",37,null],[12,"rbp","","",37,null],[12,"rsi","","",37,null],[12,"rdi","","",37,null],[12,"r8","","",37,null],[12,"r9","","",37,null],[12,"r10","","",37,null],[12,"r11","","",37,null],[12,"r12","","",37,null],[12,"r13","","",37,null],[12,"r14","","",37,null],[12,"r15","","",37,null],[12,"rflags","","",37,null],[12,"rip","","",37,null],[3,"sgx_exception_info_t","","",null,null],[12,"cpu_context","","",38,null],[12,"exception_vector","","",38,null],[12,"exception_type","","",38,null],[3,"sgx_aes_gcm_data_t","","",null,null],[12,"payload_size","","",39,null],[12,"reserved","","",39,null],[12,"payload_tag","","",39,null],[12,"payload","","",39,null],[3,"sgx_sealed_data_t","","",null,null],[12,"key_request","","",40,null],[12,"plain_text_offset","","",40,null],[12,"reserved","","",40,null],[12,"aes_data","","",40,null],[3,"sgx_ps_cap_t","","",null,null],[12,"ps_cap0","","",41,null],[12,"ps_cap1","","",41,null],[4,"sgx_dh_session_role_t","","",null,null],[13,"SGX_DH_SESSION_INITIATOR","","",42,null],[13,"SGX_DH_SESSION_RESPONDER","","",42,null],[4,"sgx_ra_key_type_t","","",null,null],[13,"SGX_RA_KEY_SK","","",43,null],[13,"SGX_RA_KEY_MK","","",43,null],[13,"SGX_RA_KEY_VK","","",43,null],[4,"sgx_quote_sign_type_t","","",null,null],[13,"SGX_UNLINKABLE_SIGNATURE","","",44,null],[13,"SGX_LINKABLE_SIGNATURE","","",44,null],[4,"sgx_generic_ecresult_t","","",null,null],[13,"SGX_EC_VALID","","",45,null],[13,"SGX_EC_COMPOSITE_BASE","","",45,null],[13,"SGX_EC_COMPLICATED_BASE","","",45,null],[13,"SGX_EC_IS_ZERO_DISCRIMINANT","","",45,null],[13,"SGX_EC_COMPOSITE_ORDER","","",45,null],[13,"SGX_EC_INVALID_ORDER","","",45,null],[13,"SGX_EC_IS_WEAK_MOV","","",45,null],[13,"SGX_EC_IS_WEAK_SSA","","",45,null],[13,"SGX_EC_IS_SUPER_SINGULAR","","",45,null],[13,"SGX_EC_INVALID_PRIVATE_KEY","","",45,null],[13,"SGX_EC_INVALID_PUBLIC_KEY","","",45,null],[13,"SGX_EC_INVALID_KEY_PAIR","","",45,null],[13,"SGX_EC_POINT_OUT_OF_GROUP","","",45,null],[13,"SGX_EC_POINT_IS_AT_INFINITY","","",45,null],[13,"SGX_EC_POINT_IS_NOT_VALID","","",45,null],[13,"SGX_EC_POINT_IS_EQUAL","","",45,null],[13,"SGX_EC_POINT_IS_NOT_EQUAL","","",45,null],[13,"SGX_EC_INVALID_SIGNATURE","","",45,null],[4,"sgx_exception_vector_t","","",null,null],[13,"SGX_EXCEPTION_VECTOR_DE","","",46,null],[13,"SGX_EXCEPTION_VECTOR_DB","","",46,null],[13,"SGX_EXCEPTION_VECTOR_BP","","",46,null],[13,"SGX_EXCEPTION_VECTOR_BR","","",46,null],[13,"SGX_EXCEPTION_VECTOR_UD","","",46,null],[13,"SGX_EXCEPTION_VECTOR_MF","","",46,null],[13,"SGX_EXCEPTION_VECTOR_AC","","",46,null],[13,"SGX_EXCEPTION_VECTOR_XM","","",46,null],[4,"sgx_exception_type_t","","",null,null],[13,"SGX_EXCEPTION_HARDWARE","","",47,null],[13,"SGX_EXCEPTION_SOFTWARE","","",47,null],[6,"sgx_misc_select_t","","",null,null],[6,"sgx_ec_key_128bit_t","","",null,null],[6,"sgx_enclave_id_t","","",null,null],[6,"sgx_key_128bit_t","","",null,null],[6,"sgx_isv_svn_t","","",null,null],[6,"sgx_ra_context_t","","",null,null],[6,"sgx_ra_key_128_t","","",null,null],[6,"sgx_epid_group_id_t","","",null,null],[6,"sgx_mac_t","","",null,null],[6,"sgx_prod_id_t","","",null,null],[6,"sgx_spinlock_t","","",null,null],[6,"sgx_time_t","","",null,null],[6,"sgx_time_source_nonce_t","","",null,null],[6,"sgx_sha_state_handle_t","","",null,null],[6,"sgx_cmac_state_handle_t","","",null,null],[6,"sgx_ecc_state_handle_t","","",null,null],[6,"sgx_sha256_hash_t","","",null,null],[6,"sgx_aes_gcm_128bit_key_t","","",null,null],[6,"sgx_aes_gcm_128bit_tag_t","","",null,null],[6,"sgx_cmac_128bit_key_t","","",null,null],[6,"sgx_cmac_128bit_tag_t","","",null,null],[6,"sgx_aes_ctr_128bit_key_t","","",null,null],[6,"sgx_thread_t","","",null,null],[6,"sgx_ra_derive_secret_keys_t","","",null,null],[6,"sgx_exception_handler_t","","",null,null],[6,"sgx_ecall_get_ga_trusted_t","","",null,null],[6,"sgx_ecall_proc_msg2_trusted_t","","",null,null],[6,"sgx_ecall_get_msg3_trusted_t","","",null,null],[6,"sgx_launch_token_t","","",null,null],[6,"sgx_cpuinfo_t","","",null,null],[17,"SGX_FLAGS_INITTED","","",null,null],[17,"SGX_FLAGS_DEBUG","","",null,null],[17,"SGX_FLAGS_MODE64BIT","","",null,null],[17,"SGX_FLAGS_PROVISION_KEY","","",null,null],[17,"SGX_FLAGS_LICENSE_KEY","","",null,null],[17,"SGX_FLAGS_RESERVED","","",null,null],[17,"SGX_XFRM_LEGACY","","",null,null],[17,"SGX_XFRM_AVX","","",null,null],[17,"SGX_XFRM_AVX512","","",null,null],[17,"SGX_XFRM_MPX","","",null,null],[17,"SGX_XFRM_RESERVED","","",null,null],[17,"SGX_DH_MAC_SIZE","","",null,null],[17,"SGX_DH_SESSION_DATA_SIZE","","",null,null],[17,"SGX_FEBITSIZE","","",null,null],[17,"SGX_KEYSELECT_LICENSE","","",null,null],[17,"SGX_KEYSELECT_PROVISION","","",null,null],[17,"SGX_KEYSELECT_PROVISION_SEAL","","",null,null],[17,"SGX_KEYSELECT_REPORT","","",null,null],[17,"SGX_KEYSELECT_SEAL","","",null,null],[17,"SGX_KEYPOLICY_MRENCLAVE","","",null,null],[17,"SGX_KEYPOLICY_MRSIGNER","","",null,null],[17,"SGX_KEYID_SIZE","","",null,null],[17,"SGX_CPUSVN_SIZE","","",null,null],[17,"SGX_KEY_REQUEST_RESERVED2_BYTES","","",null,null],[17,"SGX_PLATFORM_INFO_SIZE","","",null,null],[17,"SGX_HASH_SIZE","","",null,null],[17,"SGX_MAC_SIZE","","",null,null],[17,"SGX_REPORT_DATA_SIZE","","",null,null],[17,"SGX_TARGET_INFO_RESERVED1_BYTES","","",null,null],[17,"SGX_TARGET_INFO_RESERVED2_BYTES","","",null,null],[17,"SGX_SPINLOCK_INITIALIZER","","",null,null],[17,"SGX_MC_UUID_COUNTER_ID_SIZE","","",null,null],[17,"SGX_MC_UUID_NONCE_SIZE","","",null,null],[17,"SGX_MC_POLICY_SIGNER","","",null,null],[17,"SGX_MC_POLICY_ENCLAVE","","",null,null],[17,"SGX_SHA256_HASH_SIZE","","",null,null],[17,"SGX_ECP256_KEY_SIZE","","",null,null],[17,"SGX_NISTP_ECP256_KEY_SIZE","","",null,null],[17,"SGX_AESGCM_IV_SIZE","","",null,null],[17,"SGX_AESGCM_KEY_SIZE","","",null,null],[17,"SGX_AESGCM_MAC_SIZE","","",null,null],[17,"SGX_CMAC_KEY_SIZE","","",null,null],[17,"SGX_CMAC_MAC_SIZE","","",null,null],[17,"SGX_AESCTR_KEY_SIZE","","",null,null],[17,"SE_WORDSIZE","","",null,null],[17,"THREAD_SELF_ADDR","","",null,null],[17,"THREAD_LAST_SP_ADDR","","",null,null],[17,"THREAD_STACK_BASE_ADDR","","",null,null],[17,"THREAD_STACK_LIMIT_ADDR","","",null,null],[17,"THREAD_STACK_SSA_GPR","","",null,null],[17,"SGX_THREAD_T_NULL","","",null,null],[17,"SGX_THREAD_MUTEX_NONRECURSIVE","","",null,null],[17,"SGX_THREAD_MUTEX_RECURSIVE","","",null,null],[17,"SGX_THREAD_NONRECURSIVE_MUTEX_INITIALIZER","","",null,null],[17,"SGX_THREAD_RECURSIVE_MUTEX_INITIALIZER","","",null,null],[17,"SGX_THREAD_MUTEX_INITIALIZER","","",null,null],[17,"SGX_THREAD_COND_INITIALIZER","","",null,null],[17,"EXCEPTION_CONTINUE_SEARCH","","",null,null],[17,"EXCEPTION_CONTINUE_EXECUTION","","",null,null],[17,"SGX_SEAL_TAG_SIZE","","",null,null],[17,"SGX_SEAL_IV_SIZE","","",null,null],[17,"PS_CAP_TRUSTED_TIME","","",null,null],[17,"PS_CAP_MONOTONIC_COUNTER","","",null,null],[17,"ENCLAVE_INIT_NOT_STARTED","","",null,null],[17,"ENCLAVE_INIT_IN_PROGRESS","","",null,null],[17,"ENCLAVE_INIT_DONE","","",null,null],[17,"ENCLAVE_CRASHED","","",null,null],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"sgx_attributes_t"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"sgx_attributes_t"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"sgx_misc_attribute_t"}}],[11,"default","","",1,{"inputs":[],"output":{"name":"sgx_misc_attribute_t"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_msg1_t"}}],[11,"default","","",2,{"inputs":[],"output":{"name":"sgx_dh_msg1_t"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_msg2_t"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_msg3_body_t"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_msg3_t"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_session_enclave_identity_t"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_session_t"}}],[11,"default","","",3,{"inputs":[],"output":{"name":"sgx_dh_msg2_t"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"sgx_dh_msg3_body_t"}}],[11,"default","","",5,{"inputs":[],"output":{"name":"sgx_dh_msg3_t"}}],[11,"default","","",6,{"inputs":[],"output":{"name":"sgx_dh_session_enclave_identity_t"}}],[11,"default","","",7,{"inputs":[],"output":{"name":"sgx_dh_session_t"}}],[11,"clone","","",42,{"inputs":[{"name":"self"}],"output":{"name":"sgx_dh_session_role_t"}}],[11,"eq","","",42,{"inputs":[{"name":"self"},{"name":"sgx_dh_session_role_t"}],"output":{"name":"bool"}}],[11,"default","","",42,{"inputs":[],"output":{"name":"sgx_dh_session_role_t"}}],[11,"from_repr","","",42,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",42,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"ecc_param_t"}}],[11,"default","","",8,{"inputs":[],"output":{"name":"ecc_param_t"}}],[11,"clone","","",9,{"inputs":[{"name":"self"}],"output":{"name":"sgx_cpu_svn_t"}}],[11,"default","","",9,{"inputs":[],"output":{"name":"sgx_cpu_svn_t"}}],[11,"clone","","",10,{"inputs":[{"name":"self"}],"output":{"name":"sgx_key_id_t"}}],[11,"default","","",10,{"inputs":[],"output":{"name":"sgx_key_id_t"}}],[11,"clone","","",11,{"inputs":[{"name":"self"}],"output":{"name":"sgx_key_request_t"}}],[11,"default","","",11,{"inputs":[],"output":{"name":"sgx_key_request_t"}}],[11,"clone","","",43,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ra_key_type_t"}}],[11,"eq","","",43,{"inputs":[{"name":"self"},{"name":"sgx_ra_key_type_t"}],"output":{"name":"bool"}}],[11,"default","","",43,{"inputs":[],"output":{"name":"sgx_ra_key_type_t"}}],[11,"from_repr","","",43,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",43,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",12,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ra_msg1_t"}}],[11,"default","","",12,{"inputs":[],"output":{"name":"sgx_ra_msg1_t"}}],[11,"clone","","",13,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ra_msg2_t"}}],[11,"default","","",13,{"inputs":[],"output":{"name":"sgx_ra_msg2_t"}}],[11,"clone","","",14,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ra_msg3_t"}}],[11,"default","","",14,{"inputs":[],"output":{"name":"sgx_ra_msg3_t"}}],[11,"clone","","",15,{"inputs":[{"name":"self"}],"output":{"name":"sgx_spid_t"}}],[11,"default","","",15,{"inputs":[],"output":{"name":"sgx_spid_t"}}],[11,"clone","","",16,{"inputs":[{"name":"self"}],"output":{"name":"sgx_basename_t"}}],[11,"default","","",16,{"inputs":[],"output":{"name":"sgx_basename_t"}}],[11,"clone","","",17,{"inputs":[{"name":"self"}],"output":{"name":"sgx_quote_nonce_t"}}],[11,"default","","",17,{"inputs":[],"output":{"name":"sgx_quote_nonce_t"}}],[11,"clone","","",18,{"inputs":[{"name":"self"}],"output":{"name":"sgx_update_info_bit_t"}}],[11,"default","","",18,{"inputs":[],"output":{"name":"sgx_update_info_bit_t"}}],[11,"clone","","",44,{"inputs":[{"name":"self"}],"output":{"name":"sgx_quote_sign_type_t"}}],[11,"eq","","",44,{"inputs":[{"name":"self"},{"name":"sgx_quote_sign_type_t"}],"output":{"name":"bool"}}],[11,"default","","",44,{"inputs":[],"output":{"name":"sgx_quote_sign_type_t"}}],[11,"from_repr","","",44,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",44,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",19,{"inputs":[{"name":"self"}],"output":{"name":"sgx_quote_t"}}],[11,"clone","","",20,{"inputs":[{"name":"self"}],"output":{"name":"sgx_platform_info_t"}}],[11,"default","","",19,{"inputs":[],"output":{"name":"sgx_quote_t"}}],[11,"default","","",20,{"inputs":[],"output":{"name":"sgx_platform_info_t"}}],[11,"clone","","",21,{"inputs":[{"name":"self"}],"output":{"name":"sgx_measurement_t"}}],[11,"default","","",21,{"inputs":[],"output":{"name":"sgx_measurement_t"}}],[11,"clone","","",22,{"inputs":[{"name":"self"}],"output":{"name":"sgx_report_data_t"}}],[11,"default","","",22,{"inputs":[],"output":{"name":"sgx_report_data_t"}}],[11,"clone","","",23,{"inputs":[{"name":"self"}],"output":{"name":"sgx_target_info_t"}}],[11,"clone","","",24,{"inputs":[{"name":"self"}],"output":{"name":"sgx_report_body_t"}}],[11,"clone","","",25,{"inputs":[{"name":"self"}],"output":{"name":"sgx_report_t"}}],[11,"default","","",23,{"inputs":[],"output":{"name":"sgx_target_info_t"}}],[11,"default","","",24,{"inputs":[],"output":{"name":"sgx_report_body_t"}}],[11,"default","","",25,{"inputs":[],"output":{"name":"sgx_report_t"}}],[11,"clone","","",26,{"inputs":[{"name":"self"}],"output":{"name":"sgx_mc_uuid_t"}}],[11,"default","","",26,{"inputs":[],"output":{"name":"sgx_mc_uuid_t"}}],[11,"clone","","",27,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ps_sec_prop_desc_t"}}],[11,"default","","",27,{"inputs":[],"output":{"name":"sgx_ps_sec_prop_desc_t"}}],[11,"clone","","",28,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ec256_dh_shared_t"}}],[11,"default","","",28,{"inputs":[],"output":{"name":"sgx_ec256_dh_shared_t"}}],[11,"clone","","",29,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ec256_private_t"}}],[11,"default","","",29,{"inputs":[],"output":{"name":"sgx_ec256_private_t"}}],[11,"clone","","",30,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ec256_public_t"}}],[11,"default","","",30,{"inputs":[],"output":{"name":"sgx_ec256_public_t"}}],[11,"clone","","",31,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ec256_signature_t"}}],[11,"default","","",31,{"inputs":[],"output":{"name":"sgx_ec256_signature_t"}}],[11,"clone","","",45,{"inputs":[{"name":"self"}],"output":{"name":"sgx_generic_ecresult_t"}}],[11,"eq","","",45,{"inputs":[{"name":"self"},{"name":"sgx_generic_ecresult_t"}],"output":{"name":"bool"}}],[11,"default","","",45,{"inputs":[],"output":{"name":"sgx_generic_ecresult_t"}}],[11,"from_repr","","",45,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",45,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",34,{"inputs":[{"name":"self"}],"output":{"name":"sgx_thread_mutexattr_t"}}],[11,"default","","",34,{"inputs":[],"output":{"name":"sgx_thread_mutexattr_t"}}],[11,"clone","","",35,{"inputs":[{"name":"self"}],"output":{"name":"sgx_thread_condattr_t"}}],[11,"default","","",35,{"inputs":[],"output":{"name":"sgx_thread_condattr_t"}}],[11,"clone","","",46,{"inputs":[{"name":"self"}],"output":{"name":"sgx_exception_vector_t"}}],[11,"eq","","",46,{"inputs":[{"name":"self"},{"name":"sgx_exception_vector_t"}],"output":{"name":"bool"}}],[11,"default","","",46,{"inputs":[],"output":{"name":"sgx_exception_vector_t"}}],[11,"from_repr","","",46,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",46,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",47,{"inputs":[{"name":"self"}],"output":{"name":"sgx_exception_type_t"}}],[11,"eq","","",47,{"inputs":[{"name":"self"},{"name":"sgx_exception_type_t"}],"output":{"name":"bool"}}],[11,"default","","",47,{"inputs":[],"output":{"name":"sgx_exception_type_t"}}],[11,"from_repr","","",47,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",47,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"clone","","",37,{"inputs":[{"name":"self"}],"output":{"name":"sgx_cpu_context_t"}}],[11,"default","","",37,{"inputs":[],"output":{"name":"sgx_cpu_context_t"}}],[11,"clone","","",38,{"inputs":[{"name":"self"}],"output":{"name":"sgx_exception_info_t"}}],[11,"default","","",38,{"inputs":[],"output":{"name":"sgx_exception_info_t"}}],[11,"clone","","",39,{"inputs":[{"name":"self"}],"output":{"name":"sgx_aes_gcm_data_t"}}],[11,"default","","",39,{"inputs":[],"output":{"name":"sgx_aes_gcm_data_t"}}],[11,"clone","","",40,{"inputs":[{"name":"self"}],"output":{"name":"sgx_sealed_data_t"}}],[11,"default","","",40,{"inputs":[],"output":{"name":"sgx_sealed_data_t"}}],[11,"clone","","",41,{"inputs":[{"name":"self"}],"output":{"name":"sgx_ps_cap_t"}}],[11,"default","","",41,{"inputs":[],"output":{"name":"sgx_ps_cap_t"}}],[0,"error","sgx_types","",null,null],[4,"sgx_status_t","sgx_types::error","",null,null],[13,"SGX_SUCCESS","","",48,null],[13,"SGX_ERROR_UNEXPECTED","","",48,null],[13,"SGX_ERROR_INVALID_PARAMETER","","",48,null],[13,"SGX_ERROR_OUT_OF_MEMORY","","",48,null],[13,"SGX_ERROR_ENCLAVE_LOST","","",48,null],[13,"SGX_ERROR_INVALID_STATE","","",48,null],[13,"SGX_ERROR_INVALID_FUNCTION","","",48,null],[13,"SGX_ERROR_OUT_OF_TCS","","",48,null],[13,"SGX_ERROR_ENCLAVE_CRASHED","","",48,null],[13,"SGX_ERROR_ECALL_NOT_ALLOWED","","",48,null],[13,"SGX_ERROR_OCALL_NOT_ALLOWED","","",48,null],[13,"SGX_ERROR_STACK_OVERRUN","","",48,null],[13,"SGX_ERROR_UNDEFINED_SYMBOL","","",48,null],[13,"SGX_ERROR_INVALID_ENCLAVE","","",48,null],[13,"SGX_ERROR_INVALID_ENCLAVE_ID","","",48,null],[13,"SGX_ERROR_INVALID_SIGNATURE","","",48,null],[13,"SGX_ERROR_NDEBUG_ENCLAVE","","",48,null],[13,"SGX_ERROR_OUT_OF_EPC","","",48,null],[13,"SGX_ERROR_NO_DEVICE","","",48,null],[13,"SGX_ERROR_MEMORY_MAP_CONFLICT","","",48,null],[13,"SGX_ERROR_INVALID_METADATA","","",48,null],[13,"SGX_ERROR_DEVICE_BUSY","","",48,null],[13,"SGX_ERROR_INVALID_VERSION","","",48,null],[13,"SGX_ERROR_MODE_INCOMPATIBLE","","",48,null],[13,"SGX_ERROR_ENCLAVE_FILE_ACCESS","","",48,null],[13,"SGX_ERROR_INVALID_MISC","","",48,null],[13,"SGX_ERROR_MAC_MISMATCH","","",48,null],[13,"SGX_ERROR_INVALID_ATTRIBUTE","","",48,null],[13,"SGX_ERROR_INVALID_CPUSVN","","",48,null],[13,"SGX_ERROR_INVALID_ISVSVN","","",48,null],[13,"SGX_ERROR_INVALID_KEYNAME","","",48,null],[13,"SGX_ERROR_SERVICE_UNAVAILABLE","","",48,null],[13,"SGX_ERROR_SERVICE_TIMEOUT","","",48,null],[13,"SGX_ERROR_AE_INVALID_EPIDBLOB","","",48,null],[13,"SGX_ERROR_SERVICE_INVALID_PRIVILEGE","","",48,null],[13,"SGX_ERROR_EPID_MEMBER_REVOKED","","",48,null],[13,"SGX_ERROR_UPDATE_NEEDED","","",48,null],[13,"SGX_ERROR_NETWORK_FAILURE","","",48,null],[13,"SGX_ERROR_AE_SESSION_INVALID","","",48,null],[13,"SGX_ERROR_BUSY","","",48,null],[13,"SGX_ERROR_MC_NOT_FOUND","","",48,null],[13,"SGX_ERROR_MC_NO_ACCESS_RIGHT","","",48,null],[13,"SGX_ERROR_MC_USED_UP","","",48,null],[13,"SGX_ERROR_MC_OVER_QUOTA","","",48,null],[13,"SGX_ERROR_KDF_MISMATCH","","",48,null],[6,"sys_error_t","","",null,null],[6,"SgxResult","","",null,null],[6,"SgxError","","",null,null],[6,"SysResult","","",null,null],[6,"SysError","","",null,null],[17,"EPERM","","",null,null],[17,"ENOENT","","",null,null],[17,"ESRCH","","",null,null],[17,"EINTR","","",null,null],[17,"EIO","","",null,null],[17,"ENXIO","","",null,null],[17,"E2BIG","","",null,null],[17,"ENOEXEC","","",null,null],[17,"EBADF","","",null,null],[17,"ECHILD","","",null,null],[17,"EAGAIN","","",null,null],[17,"ENOMEM","","",null,null],[17,"EACCES","","",null,null],[17,"EFAULT","","",null,null],[17,"ENOTBLK","","",null,null],[17,"EBUSY","","",null,null],[17,"EEXIST","","",null,null],[17,"EXDEV","","",null,null],[17,"ENODEV","","",null,null],[17,"ENOTDIR","","",null,null],[17,"EISDIR","","",null,null],[17,"EINVAL","","",null,null],[17,"ENFILE","","",null,null],[17,"EMFILE","","",null,null],[17,"ENOTTY","","",null,null],[17,"ETXTBSY","","",null,null],[17,"EFBIG","","",null,null],[17,"ENOSPC","","",null,null],[17,"ESPIPE","","",null,null],[17,"EROFS","","",null,null],[17,"EMLINK","","",null,null],[17,"EPIPE","","",null,null],[17,"EDOM","","",null,null],[17,"ERANGE","","",null,null],[17,"EDEADLK","","",null,null],[17,"ENAMETOOLONG","","",null,null],[17,"ENOLCK","","",null,null],[17,"ENOSYS","","",null,null],[17,"ENOTEMPTY","","",null,null],[17,"ELOOP","","",null,null],[17,"EWOULDBLOCK","","",null,null],[17,"ENOMSG","","",null,null],[17,"EIDRM","","",null,null],[17,"ECHRNG","","",null,null],[17,"EL2NSYNC","","",null,null],[17,"EL3HLT","","",null,null],[17,"EL3RST","","",null,null],[17,"ELNRNG","","",null,null],[17,"EUNATCH","","",null,null],[17,"ENOCSI","","",null,null],[17,"EL2HLT","","",null,null],[17,"EBADE","","",null,null],[17,"EBADR","","",null,null],[17,"EXFULL","","",null,null],[17,"ENOANO","","",null,null],[17,"EBADRQC","","",null,null],[17,"EBADSLT","","",null,null],[17,"EDEADLOCK","","",null,null],[17,"EBFONT","","",null,null],[17,"ENOSTR","","",null,null],[17,"ENODATA","","",null,null],[17,"ETIME","","",null,null],[17,"ENOSR","","",null,null],[17,"ENONET","","",null,null],[17,"ENOPKG","","",null,null],[17,"EREMOTE","","",null,null],[17,"ENOLINK","","",null,null],[17,"EADV","","",null,null],[17,"ESRMNT","","",null,null],[17,"ECOMM","","",null,null],[17,"EPROTO","","",null,null],[17,"EMULTIHOP","","",null,null],[17,"EDOTDOT","","",null,null],[17,"EBADMSG","","",null,null],[17,"EOVERFLOW","","",null,null],[17,"ENOTUNIQ","","",null,null],[17,"EBADFD","","",null,null],[17,"EREMCHG","","",null,null],[17,"ELIBACC","","",null,null],[17,"ELIBBAD","","",null,null],[17,"ELIBSCN","","",null,null],[17,"ELIBMAX","","",null,null],[17,"ELIBEXEC","","",null,null],[17,"EILSEQ","","",null,null],[17,"ERESTART","","",null,null],[17,"ESTRPIPE","","",null,null],[17,"EUSERS","","",null,null],[17,"ENOTSOCK","","",null,null],[17,"EDESTADDRREQ","","",null,null],[17,"EMSGSIZE","","",null,null],[17,"EPROTOTYPE","","",null,null],[17,"ENOPROTOOPT","","",null,null],[17,"EPROTONOSUPPORT","","",null,null],[17,"ESOCKTNOSUPPORT","","",null,null],[17,"EOPNOTSUPP","","",null,null],[17,"EPFNOSUPPORT","","",null,null],[17,"EAFNOSUPPORT","","",null,null],[17,"EADDRINUSE","","",null,null],[17,"EADDRNOTAVAIL","","",null,null],[17,"ENETDOWN","","",null,null],[17,"ENETUNREACH","","",null,null],[17,"ENETRESET","","",null,null],[17,"ECONNABORTED","","",null,null],[17,"ECONNRESET","","",null,null],[17,"ENOBUFS","","",null,null],[17,"EISCONN","","",null,null],[17,"ENOTCONN","","",null,null],[17,"ESHUTDOWN","","",null,null],[17,"ETOOMANYREFS","","",null,null],[17,"ETIMEDOUT","","",null,null],[17,"ECONNREFUSED","","",null,null],[17,"EHOSTDOWN","","",null,null],[17,"EHOSTUNREACH","","",null,null],[17,"EALREADY","","",null,null],[17,"EINPROGRESS","","",null,null],[17,"ESTALE","","",null,null],[17,"EUCLEAN","","",null,null],[17,"ENOTNAM","","",null,null],[17,"ENAVAIL","","",null,null],[17,"EISNAM","","",null,null],[17,"EREMOTEIO","","",null,null],[17,"EDQUOT","","",null,null],[17,"ENOMEDIUM","","",null,null],[17,"EMEDIUMTYPE","","",null,null],[17,"ECANCELED","","",null,null],[17,"ENOKEY","","",null,null],[17,"EKEYEXPIRED","","",null,null],[17,"EKEYREVOKED","","",null,null],[17,"EKEYREJECTED","","",null,null],[17,"EOWNERDEAD","","",null,null],[17,"ENOTRECOVERABLE","","",null,null],[17,"ERFKILL","","",null,null],[17,"EHWPOISON","","",null,null],[17,"ENOTSUP","","",null,null],[11,"clone","","",48,{"inputs":[{"name":"self"}],"output":{"name":"sgx_status_t"}}],[11,"eq","","",48,{"inputs":[{"name":"self"},{"name":"sgx_status_t"}],"output":{"name":"bool"}}],[11,"default","","",48,{"inputs":[],"output":{"name":"sgx_status_t"}}],[11,"from_repr","","",48,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_key","","",48,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[0,"function","sgx_types","",null,null],[5,"sgx_cpuid","sgx_types::function","",null,null],[5,"sgx_cpuidex","","",null,null],[5,"sgx_spin_lock","","",null,null],[5,"sgx_spin_unlock","","",null,null],[5,"sgx_thread_mutex_init","","",null,null],[5,"sgx_thread_mutex_destroy","","",null,null],[5,"sgx_thread_mutex_lock","","",null,null],[5,"sgx_thread_mutex_trylock","","",null,null],[5,"sgx_thread_mutex_unlock","","",null,null],[5,"sgx_thread_cond_init","","",null,null],[5,"sgx_thread_cond_destroy","","",null,null],[5,"sgx_thread_cond_wait","","",null,null],[5,"sgx_thread_cond_signal","","",null,null],[5,"sgx_thread_cond_broadcast","","",null,null],[5,"sgx_thread_self","","",null,null],[5,"sgx_thread_equal","","",null,null],[5,"sgx_dh_init_session","","",null,null],[5,"sgx_dh_responder_gen_msg1","","",null,null],[5,"sgx_dh_initiator_proc_msg1","","",null,null],[5,"sgx_dh_responder_proc_msg2","","",null,null],[5,"sgx_dh_initiator_proc_msg3","","",null,null],[5,"sgx_create_pse_session","","",null,null],[5,"sgx_close_pse_session","","",null,null],[5,"sgx_get_ps_sec_prop","","",null,null],[5,"sgx_get_trusted_time","","",null,null],[5,"sgx_create_monotonic_counter_ex","","",null,null],[5,"sgx_create_monotonic_counter","","",null,null],[5,"sgx_destroy_monotonic_counter","","",null,null],[5,"sgx_increment_monotonic_counter","","",null,null],[5,"sgx_read_monotonic_counter","","",null,null],[5,"sgx_calc_sealed_data_size","","",null,null],[5,"sgx_get_add_mac_txt_len","","",null,null],[5,"sgx_get_encrypt_txt_len","","",null,null],[5,"sgx_seal_data","","",null,null],[5,"sgx_seal_data_ex","","",null,null],[5,"sgx_unseal_data","","",null,null],[5,"sgx_mac_aadata","","",null,null],[5,"sgx_mac_aadata_ex","","",null,null],[5,"sgx_unmac_aadata","","",null,null],[5,"sgx_create_report","","",null,null],[5,"sgx_verify_report","","",null,null],[5,"sgx_get_key","","",null,null],[5,"sgx_sha256_msg","","",null,null],[5,"sgx_sha256_init","","",null,null],[5,"sgx_sha256_update","","",null,null],[5,"sgx_sha256_get_hash","","",null,null],[5,"sgx_sha256_close","","",null,null],[5,"sgx_rijndael128GCM_encrypt","","",null,null],[5,"sgx_rijndael128GCM_decrypt","","",null,null],[5,"sgx_rijndael128_cmac_msg","","",null,null],[5,"sgx_cmac128_init","","",null,null],[5,"sgx_cmac128_update","","",null,null],[5,"sgx_cmac128_final","","",null,null],[5,"sgx_cmac128_close","","",null,null],[5,"sgx_aes_ctr_encrypt","","",null,null],[5,"sgx_aes_ctr_decrypt","","",null,null],[5,"sgx_ecc256_open_context","","",null,null],[5,"sgx_ecc256_close_context","","",null,null],[5,"sgx_ecc256_create_key_pair","","",null,null],[5,"sgx_ecc256_check_point","","",null,null],[5,"sgx_ecc256_compute_shared_dhkey","","",null,null],[5,"sgx_ecdsa_sign","","",null,null],[5,"sgx_ecdsa_verify","","",null,null],[5,"sgx_ra_init","","",null,null],[5,"sgx_ra_init_ex","","",null,null],[5,"sgx_ra_get_keys","","",null,null],[5,"sgx_ra_close","","",null,null],[5,"sgx_is_within_enclave","","",null,null],[5,"sgx_is_outside_enclave","","",null,null],[5,"sgx_read_rand","","",null,null],[5,"sgx_register_exception_handler","","",null,null],[5,"sgx_unregister_exception_handler","","",null,null],[5,"sgx_ocalloc","","",null,null],[5,"sgx_sgx_ocfree","","",null,null],[5,"abort","","",null,null],[5,"get_thread_data","","",null,null],[5,"get_enclave_base","","",null,null],[5,"get_heap_base","","",null,null],[5,"get_heap_size","","",null,null],[5,"sgx_init_quote","","",null,null],[5,"sgx_get_quote_size","","",null,null],[5,"sgx_get_quote","","",null,null],[5,"sgx_get_ps_cap","","",null,null],[5,"sgx_get_whitelist_size","","",null,null],[5,"sgx_get_whitelist","","",null,null],[5,"sgx_get_extended_epid_group_id","","",null,null],[5,"sgx_report_attestation_status","","",null,null],[5,"sgx_ra_get_msg1","","",null,null],[5,"sgx_ra_proc_msg2","","",null,null],[5,"sgx_create_enclave","","",null,null],[5,"sgx_destroy_enclave","","",null,null],[0,"oom","sgx_types","",null,null],[5,"set_panic_handler","sgx_types::oom","",null,null],[5,"rsgx_abort","","",null,null],[5,"rust_begin_panic","","",null,null],[5,"rust_eh_personality","","",null,{"inputs":[],"output":null}],[5,"rust_eh_unwind_resume","","",null,{"inputs":[],"output":null}],[6,"int8_t","sgx_types","",null,null],[6,"int16_t","","",null,null],[6,"int32_t","","",null,null],[6,"int64_t","","",null,null],[6,"uint8_t","","",null,null],[6,"uint16_t","","",null,null],[6,"uint32_t","","",null,null],[6,"uint64_t","","",null,null],[6,"c_schar","","",null,null],[6,"c_uchar","","",null,null],[6,"c_short","","",null,null],[6,"c_ushort","","",null,null],[6,"c_int","","",null,null],[6,"c_uint","","",null,null],[6,"c_float","","",null,null],[6,"c_double","","",null,null],[6,"c_longlong","","",null,null],[6,"c_ulonglong","","",null,null],[6,"intmax_t","","",null,null],[6,"uintmax_t","","",null,null],[6,"size_t","","",null,null],[6,"ptrdiff_t","","",null,null],[6,"intptr_t","","",null,null],[6,"uintptr_t","","",null,null],[6,"ssize_t","","",null,null],[14,"impl_struct","","",null,null],[14,"impl_enum","","",null,null]],"paths":[[3,"sgx_attributes_t"],[3,"sgx_misc_attribute_t"],[3,"sgx_dh_msg1_t"],[3,"sgx_dh_msg2_t"],[3,"sgx_dh_msg3_body_t"],[3,"sgx_dh_msg3_t"],[3,"sgx_dh_session_enclave_identity_t"],[3,"sgx_dh_session_t"],[3,"ecc_param_t"],[3,"sgx_cpu_svn_t"],[3,"sgx_key_id_t"],[3,"sgx_key_request_t"],[3,"sgx_ra_msg1_t"],[3,"sgx_ra_msg2_t"],[3,"sgx_ra_msg3_t"],[3,"sgx_spid_t"],[3,"sgx_basename_t"],[3,"sgx_quote_nonce_t"],[3,"sgx_update_info_bit_t"],[3,"sgx_quote_t"],[3,"sgx_platform_info_t"],[3,"sgx_measurement_t"],[3,"sgx_report_data_t"],[3,"sgx_target_info_t"],[3,"sgx_report_body_t"],[3,"sgx_report_t"],[3,"sgx_mc_uuid_t"],[3,"sgx_ps_sec_prop_desc_t"],[3,"sgx_ec256_dh_shared_t"],[3,"sgx_ec256_private_t"],[3,"sgx_ec256_public_t"],[3,"sgx_ec256_signature_t"],[3,"sgx_thread_queue_t"],[3,"sgx_thread_mutex_t"],[3,"sgx_thread_mutexattr_t"],[3,"sgx_thread_condattr_t"],[3,"sgx_thread_cond_t"],[3,"sgx_cpu_context_t"],[3,"sgx_exception_info_t"],[3,"sgx_aes_gcm_data_t"],[3,"sgx_sealed_data_t"],[3,"sgx_ps_cap_t"],[4,"sgx_dh_session_role_t"],[4,"sgx_ra_key_type_t"],[4,"sgx_quote_sign_type_t"],[4,"sgx_generic_ecresult_t"],[4,"sgx_exception_vector_t"],[4,"sgx_exception_type_t"],[4,"sgx_status_t"]]};
initSearch(searchIndex);
