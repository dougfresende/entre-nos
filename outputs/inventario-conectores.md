# Inventário de conectores e ferramentas

Levantamento em 17/09/2026. Inventário das ferramentas expostas nesta sessão; presença de ferramenta não comprova autenticação ou acesso a todos os recursos de uma conta. Nenhuma permissão foi alterada.

## Seleção para este projeto

GitHub para código; navegador e busca web para pesquisa e testes; ImageGen para conceito; Canva/Adobe para peças opcionais; recursos locais para Docker e arquivos. Google Drive pode receber backup em uma etapa futura com configuração própria. Um conector do Codex não vira automaticamente uma integração do app publicado.

A busca no diretório confirmou GitHub instalado; Hugging Face, Supabase e Netlify disponíveis, mas não instalados. A pesquisa pública do Hugging Face já foi realizada pela web, sem necessidade de instalação. Não há motivo para adicionar serviços pagos ao fluxo principal.

## Famílias expostas

| Família | Ferramentas |
|---|---:|
| Recursos nativos | 15 |
| adobe | 92 |
| adspirer | 39 |
| atlassian | 32 |
| canva | 33 |
| codex | 3 |
| codex_app | 31 |
| codex_security | 20 |
| creative_production_mcp | 1 |
| github | 89 |
| gmail | 21 |
| google | 60 |
| hotline | 1 |
| linear | 74 |
| lovable | 40 |
| node_repl | 3 |
| openai_artifact_template_picker | 2 |
| plugin | 6 |
| safety | 5 |
| sites | 23 |
| windsor | 17 |

Nomes das famílias: adobe = Adobe/Acrobat; atlassian = Jira/Confluence; google = Drive/Docs/Sheets/Slides e Calendar; sites = publicação de sites; linear = Linear; lovable = Lovable; gmail = Gmail; canva = Canva; windsor = Windsor.ai; adspirer = publicidade. Recursos de segurança, artefatos, app Codex e runtime são ferramentas auxiliares, não contas de hospedagem.


## Recursos nativos

- `apply_patch`
- `clock__curr_time`
- `create_goal`
- `exec_command`
- `get_goal`
- `image_gen__imagegen`
- `list_mcp_resource_templates`
- `list_mcp_resources`
- `read_mcp_resource`
- `request_permissions`
- `request_plugin_install`
- `update_goal`
- `view_image`
- `web__run`
- `write_stdin`

## adobe

- `mcp__codex_apps__adobe_acrobat_document_upload`
- `mcp__codex_apps__adobe_acrobat_markdown_to_pdf`
- `mcp__codex_apps__adobe_acrobat_pdf_combine`
- `mcp__codex_apps__adobe_acrobat_pdf_compress`
- `mcp__codex_apps__adobe_acrobat_pdf_create`
- `mcp__codex_apps__adobe_acrobat_pdf_delete_pages`
- `mcp__codex_apps__adobe_acrobat_pdf_edit_ui`
- `mcp__codex_apps__adobe_acrobat_pdf_export`
- `mcp__codex_apps__adobe_acrobat_pdf_ocr`
- `mcp__codex_apps__adobe_acrobat_pdf_operation_status`
- `mcp__codex_apps__adobe_acrobat_pdf_page_organize`
- `mcp__codex_apps__adobe_acrobat_pdf_properties`
- `mcp__codex_apps__adobe_acrobat_pdf_redact`
- `mcp__codex_apps__adobe_acrobat_pdf_reorder_pages`
- `mcp__codex_apps__adobe_acrobat_pdf_rotate_pages`
- `mcp__codex_apps__adobe_acrobat_pdf_split`
- `mcp__codex_apps__adobe_acrobat_pdf_to_image`
- `mcp__codex_apps__adobe_acrobat_pdf_to_markdown`
- `mcp__codex_apps__adobe_acrobat_pdf_viewer`
- `mcp__codex_apps__adobe_adobe_mandatory_init`
- `mcp__codex_apps__adobe_animate_design`
- `mcp__codex_apps__adobe_asset_add_file`
- `mcp__codex_apps__adobe_asset_add_file_check_status`
- `mcp__codex_apps__adobe_asset_copy_assets`
- `mcp__codex_apps__adobe_asset_create_folders`
- `mcp__codex_apps__adobe_asset_finalize_file_upload`
- `mcp__codex_apps__adobe_asset_get_presigned_urls`
- `mcp__codex_apps__adobe_asset_initialize_file_upload`
- `mcp__codex_apps__adobe_asset_inline_preview`
- `mcp__codex_apps__adobe_asset_license_and_download_stock`
- `mcp__codex_apps__adobe_asset_migrate_guest_storage`
- `mcp__codex_apps__adobe_asset_openai_file_upload`
- `mcp__codex_apps__adobe_asset_preview_file`
- `mcp__codex_apps__adobe_asset_search`
- `mcp__codex_apps__adobe_boards_add_items_to_board`
- `mcp__codex_apps__adobe_boards_create_new_board`
- `mcp__codex_apps__adobe_change_background_color`
- `mcp__codex_apps__adobe_convert_pdf_to_indd`
- `mcp__codex_apps__adobe_document_convert_pdf`
- `mcp__codex_apps__adobe_document_merge_data_layout`
- `mcp__codex_apps__adobe_document_merge_data_vector`
- `mcp__codex_apps__adobe_document_render_layout`
- `mcp__codex_apps__adobe_document_render_vector`
- `mcp__codex_apps__adobe_download_design`
- `mcp__codex_apps__adobe_export_idml`
- `mcp__codex_apps__adobe_fill_text`
- `mcp__codex_apps__adobe_font_recommend`
- `mcp__codex_apps__adobe_generate_indd_mapping_prompt`
- `mcp__codex_apps__adobe_image_add_grain`
- `mcp__codex_apps__adobe_image_add_noise`
- `mcp__codex_apps__adobe_image_apply_adjustments`
- `mcp__codex_apps__adobe_image_apply_auto_tone`
- `mcp__codex_apps__adobe_image_apply_color_overlay`
- `mcp__codex_apps__adobe_image_apply_gaussian_blur`
- `mcp__codex_apps__adobe_image_apply_glitch_effect`
- `mcp__codex_apps__adobe_image_apply_halftone`
- `mcp__codex_apps__adobe_image_apply_lens_blur`
- `mcp__codex_apps__adobe_image_apply_monochromatic_tint`
- `mcp__codex_apps__adobe_image_apply_preset`
- `mcp__codex_apps__adobe_image_auto_straighten`
- `mcp__codex_apps__adobe_image_crop_and_resize`
- `mcp__codex_apps__adobe_image_crop_to_bounds`
- `mcp__codex_apps__adobe_image_fill_area`
- `mcp__codex_apps__adobe_image_generate`
- `mcp__codex_apps__adobe_image_generative_expand`
- `mcp__codex_apps__adobe_image_instruct_edit`
- `mcp__codex_apps__adobe_image_invert_selection`
- `mcp__codex_apps__adobe_image_list_presets`
- `mcp__codex_apps__adobe_image_remove_background`
- `mcp__codex_apps__adobe_image_remove_blemishes`
- `mcp__codex_apps__adobe_image_select_by_prompt`
- `mcp__codex_apps__adobe_image_select_subject`
- `mcp__codex_apps__adobe_image_vectorize`
- `mcp__codex_apps__adobe_markdown_to_pdf`
- `mcp__codex_apps__adobe_media_enhance_speech`
- `mcp__codex_apps__adobe_media_summarize`
- `mcp__codex_apps__adobe_pdf_compress`
- `mcp__codex_apps__adobe_pdf_create`
- `mcp__codex_apps__adobe_pdf_export`
- `mcp__codex_apps__adobe_pdf_ocr`
- `mcp__codex_apps__adobe_pdf_operation_status`
- `mcp__codex_apps__adobe_pdf_properties`
- `mcp__codex_apps__adobe_pdf_to_image`
- `mcp__codex_apps__adobe_pdf_to_markdown`
- `mcp__codex_apps__adobe_prepare_indd_merge_template`
- `mcp__codex_apps__adobe_replace_image`
- `mcp__codex_apps__adobe_search_design`
- `mcp__codex_apps__adobe_video_create_quick_cut`
- `mcp__codex_apps__adobe_video_metadata`
- `mcp__codex_apps__adobe_video_render`
- `mcp__codex_apps__adobe_video_render_frame`
- `mcp__codex_apps__adobe_video_resize`

## adspirer

- `mcp__adspirer__amazon_ads`
- `mcp__adspirer__audit_conversion_tracking`
- `mcp__adspirer__chatgpt_ads`
- `mcp__adspirer__competitor_ads_research`
- `mcp__adspirer__diagnose_funnel`
- `mcp__adspirer__get_campaign_performance`
- `mcp__adspirer__get_connections_status`
- `mcp__adspirer__get_meta_campaign_performance`
- `mcp__adspirer__get_tool_schema`
- `mcp__adspirer__get_usage_status`
- `mcp__adspirer__google_ads`
- `mcp__adspirer__google_analytics`
- `mcp__adspirer__google_search_console`
- `mcp__adspirer__google_tag_manager`
- `mcp__adspirer__klaviyo`
- `mcp__adspirer__linkedin_ads`
- `mcp__adspirer__meta_ads`
- `mcp__adspirer__microsoft_ads`
- `mcp__adspirer__monitoring_and_reporting`
- `mcp__adspirer__search_tools`
- `mcp__adspirer__start_here`
- `mcp__adspirer__switch_primary_account`
- `mcp__adspirer__tiktok_ads`
- `mcp__codex_apps__adspirer_audit_conversion_tracking`
- `mcp__codex_apps__adspirer_competitor_ads_research`
- `mcp__codex_apps__adspirer_diagnose_funnel`
- `mcp__codex_apps__adspirer_get_campaign_performance`
- `mcp__codex_apps__adspirer_get_connections_status`
- `mcp__codex_apps__adspirer_get_meta_campaign_performance`
- `mcp__codex_apps__adspirer_get_usage_status`
- `mcp__codex_apps__adspirer_google_ads`
- `mcp__codex_apps__adspirer_google_analytics`
- `mcp__codex_apps__adspirer_linkedin_ads`
- `mcp__codex_apps__adspirer_meta_ads`
- `mcp__codex_apps__adspirer_monitoring_and_reporting`
- `mcp__codex_apps__adspirer_search_tools`
- `mcp__codex_apps__adspirer_start_here`
- `mcp__codex_apps__adspirer_switch_primary_account`
- `mcp__codex_apps__adspirer_tiktok_ads`

## atlassian

- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_addcommenttojiraissue`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_addworklogtojiraissue`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_atlassianuserinfo`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_createconfluencefootercomment`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_createconfluenceinlinecomment`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_createconfluencepage`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_createissuelink`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_createjiraissue`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_editjiraissue`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_fetch`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getaccessibleatlassianresources`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getconfluencecommentchildren`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getconfluencepage`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getconfluencepagedescendants`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getconfluencepagefootercomments`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getconfluencepageinlinecomments`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getconfluencespaces`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getcontentformatguide`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getissuelinktypes`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getjiraissue`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getjiraissueremoteissuelinks`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getjiraissuetypemetawithfields`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getjiraprojectissuetypesmetadata`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getpagesinconfluencespace`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_gettransitionsforjiraissue`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_getvisiblejiraprojects`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_lookupjiraaccountid`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_search`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_searchconfluenceusingcql`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_searchjiraissuesusingjql`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_transitionjiraissue`
- `mcp__codex_apps__atlassian_rovo__legacy__atlassian_rovo_legacy_updateconfluencepage`

## canva

- `mcp__codex_apps__canva_autofill_design`
- `mcp__codex_apps__canva_cancel_editing_transaction`
- `mcp__codex_apps__canva_commit_editing_transaction`
- `mcp__codex_apps__canva_copy_design`
- `mcp__codex_apps__canva_create_design_from_brand_template`
- `mcp__codex_apps__canva_create_design_from_candidate`
- `mcp__codex_apps__canva_create_folder`
- `mcp__codex_apps__canva_fetch`
- `mcp__codex_apps__canva_generate_design`
- `mcp__codex_apps__canva_get_assets`
- `mcp__codex_apps__canva_get_brand_template_dataset`
- `mcp__codex_apps__canva_get_design`
- `mcp__codex_apps__canva_get_design_content`
- `mcp__codex_apps__canva_get_design_pages`
- `mcp__codex_apps__canva_get_design_thumbnail`
- `mcp__codex_apps__canva_get_presenter_notes`
- `mcp__codex_apps__canva_image_to_design`
- `mcp__codex_apps__canva_import_design_from_url`
- `mcp__codex_apps__canva_list_brand_kits`
- `mcp__codex_apps__canva_list_comments`
- `mcp__codex_apps__canva_list_folder_items`
- `mcp__codex_apps__canva_merge_designs`
- `mcp__codex_apps__canva_move_item_to_folder`
- `mcp__codex_apps__canva_perform_editing_operations`
- `mcp__codex_apps__canva_prepare_design_generation`
- `mcp__codex_apps__canva_resize_design`
- `mcp__codex_apps__canva_resolve_shortlink`
- `mcp__codex_apps__canva_search`
- `mcp__codex_apps__canva_search_brand_templates`
- `mcp__codex_apps__canva_search_designs`
- `mcp__codex_apps__canva_search_folders`
- `mcp__codex_apps__canva_start_editing_transaction`
- `mcp__codex_apps__canva_upload_asset_from_url`

## codex

- `mcp__codex_apps__codex_document_control_execute_document_command`
- `mcp__codex_apps__codex_document_control_get_document_tool_schemas`
- `mcp__codex_apps__codex_document_control_list_document_sessions`

## codex_app

- `mcp__codex_app__automation_update`
- `mcp__codex_app__capture_screen_context`
- `mcp__codex_app__consume_usage_reset`
- `mcp__codex_app__create_sidebar_section`
- `mcp__codex_app__create_thread`
- `mcp__codex_app__delete_sidebar_section`
- `mcp__codex_app__end_realtime_voice_call`
- `mcp__codex_app__fork_thread`
- `mcp__codex_app__get_handoff_status`
- `mcp__codex_app__get_usage_limits`
- `mcp__codex_app__handoff_thread`
- `mcp__codex_app__list_archived_threads`
- `mcp__codex_app__list_projects`
- `mcp__codex_app__list_threads`
- `mcp__codex_app__load_workspace_dependencies`
- `mcp__codex_app__move_project_to_sidebar_section`
- `mcp__codex_app__move_thread_to_sidebar_section`
- `mcp__codex_app__navigate_to_codex_page`
- `mcp__codex_app__open_in_codex`
- `mcp__codex_app__read_thread`
- `mcp__codex_app__read_thread_terminal`
- `mcp__codex_app__rename_sidebar_section`
- `mcp__codex_app__reorder_section`
- `mcp__codex_app__reorder_sidebar_projects`
- `mcp__codex_app__reorder_sidebar_sections`
- `mcp__codex_app__send_message_to_thread`
- `mcp__codex_app__set_thread_archived`
- `mcp__codex_app__set_thread_title`
- `mcp__codex_app__share_thread`
- `mcp__codex_app__uninstall_plugin`
- `mcp__codex_app__wait_threads`

## codex_security

- `mcp__codex_security__cancel_codex_security_scan`
- `mcp__codex_security__complete_codex_security_scan`
- `mcp__codex_security__fail_codex_security_scan`
- `mcp__codex_security__get_codex_security_completed_scan`
- `mcp__codex_security__get_codex_security_daybreak_access`
- `mcp__codex_security__get_codex_security_scan_context`
- `mcp__codex_security__list_codex_security_candidates`
- `mcp__codex_security__list_codex_security_review_items`
- `mcp__codex_security__prepare_codex_security_review_items`
- `mcp__codex_security__record_candidate_attack_paths`
- `mcp__codex_security__record_codex_security_candidate_validations`
- `mcp__codex_security__record_codex_security_discovery_candidates`
- `mcp__codex_security__record_codex_security_scan_draft`
- `mcp__codex_security__request_codex_security_user_input`
- `mcp__codex_security__set_codex_security_finding_remediation`
- `mcp__codex_security__start_codex_security_deep_scan`
- `mcp__codex_security__start_codex_security_prompt_only_scan`
- `mcp__codex_security__start_codex_security_standard_scan`
- `mcp__codex_security__update_codex_security_scan_context`
- `mcp__codex_security__update_codex_security_scan_progress`

## creative_production_mcp

- `mcp__creative_production_mcp__creative_production_board`

## github

- `mcp__codex_apps__github_add_comment_to_issue`
- `mcp__codex_apps__github_add_issue_assignees`
- `mcp__codex_apps__github_add_issue_labels`
- `mcp__codex_apps__github_add_reaction_to_issue_comment`
- `mcp__codex_apps__github_add_reaction_to_pr`
- `mcp__codex_apps__github_add_reaction_to_pr_review_comment`
- `mcp__codex_apps__github_add_review_to_pr`
- `mcp__codex_apps__github_compare_commits`
- `mcp__codex_apps__github_convert_pull_request_to_draft`
- `mcp__codex_apps__github_create_blob`
- `mcp__codex_apps__github_create_branch`
- `mcp__codex_apps__github_create_commit`
- `mcp__codex_apps__github_create_file`
- `mcp__codex_apps__github_create_issue`
- `mcp__codex_apps__github_create_pull_request`
- `mcp__codex_apps__github_create_tree`
- `mcp__codex_apps__github_delete_file`
- `mcp__codex_apps__github_dismiss_pull_request_review`
- `mcp__codex_apps__github_download_user_content`
- `mcp__codex_apps__github_download_workflow_artifact`
- `mcp__codex_apps__github_enable_auto_merge`
- `mcp__codex_apps__github_fetch`
- `mcp__codex_apps__github_fetch_blob`
- `mcp__codex_apps__github_fetch_commit`
- `mcp__codex_apps__github_fetch_commit_workflow_runs`
- `mcp__codex_apps__github_fetch_file`
- `mcp__codex_apps__github_fetch_issue`
- `mcp__codex_apps__github_fetch_issue_comments`
- `mcp__codex_apps__github_fetch_pr`
- `mcp__codex_apps__github_fetch_pr_comments`
- `mcp__codex_apps__github_fetch_pr_file_patch`
- `mcp__codex_apps__github_fetch_pr_patch`
- `mcp__codex_apps__github_fetch_workflow_job_logs`
- `mcp__codex_apps__github_fetch_workflow_job_steps`
- `mcp__codex_apps__github_fetch_workflow_run_artifacts`
- `mcp__codex_apps__github_fetch_workflow_run_jobs`
- `mcp__codex_apps__github_get_commit_combined_status`
- `mcp__codex_apps__github_get_issue_comment_reactions`
- `mcp__codex_apps__github_get_pr_diff`
- `mcp__codex_apps__github_get_pr_info`
- `mcp__codex_apps__github_get_pr_reactions`
- `mcp__codex_apps__github_get_pr_review_comment_reactions`
- `mcp__codex_apps__github_get_profile`
- `mcp__codex_apps__github_get_repo`
- `mcp__codex_apps__github_get_repo_collaborator_permission`
- `mcp__codex_apps__github_get_user_login`
- `mcp__codex_apps__github_get_users_recent_prs_in_repo`
- `mcp__codex_apps__github_label_pr`
- `mcp__codex_apps__github_list_installations`
- `mcp__codex_apps__github_list_installed_accounts`
- `mcp__codex_apps__github_list_pr_changed_filenames`
- `mcp__codex_apps__github_list_pull_request_review_threads`
- `mcp__codex_apps__github_list_pull_request_reviews`
- `mcp__codex_apps__github_list_recent_issues`
- `mcp__codex_apps__github_list_repositories`
- `mcp__codex_apps__github_list_repositories_by_affiliation`
- `mcp__codex_apps__github_list_repositories_by_installation`
- `mcp__codex_apps__github_list_user_org_memberships`
- `mcp__codex_apps__github_list_user_orgs`
- `mcp__codex_apps__github_lock_issue_conversation`
- `mcp__codex_apps__github_mark_pull_request_ready_for_review`
- `mcp__codex_apps__github_merge_pull_request`
- `mcp__codex_apps__github_remove_issue_assignees`
- `mcp__codex_apps__github_remove_issue_label`
- `mcp__codex_apps__github_remove_pull_request_reviewers`
- `mcp__codex_apps__github_remove_reaction_from_issue_comment`
- `mcp__codex_apps__github_remove_reaction_from_pr`
- `mcp__codex_apps__github_remove_reaction_from_pr_review_comment`
- `mcp__codex_apps__github_reply_to_review_comment`
- `mcp__codex_apps__github_request_pull_request_reviewers`
- `mcp__codex_apps__github_rerun_failed_workflow_run_jobs`
- `mcp__codex_apps__github_rerun_workflow_job`
- `mcp__codex_apps__github_resolve_review_thread`
- `mcp__codex_apps__github_search`
- `mcp__codex_apps__github_search_branches`
- `mcp__codex_apps__github_search_commits`
- `mcp__codex_apps__github_search_installed_repositories_streaming`
- `mcp__codex_apps__github_search_installed_repositories_v2`
- `mcp__codex_apps__github_search_issues`
- `mcp__codex_apps__github_search_prs`
- `mcp__codex_apps__github_search_repositories`
- `mcp__codex_apps__github_unlock_issue_conversation`
- `mcp__codex_apps__github_unresolve_review_thread`
- `mcp__codex_apps__github_update_file`
- `mcp__codex_apps__github_update_issue`
- `mcp__codex_apps__github_update_issue_comment`
- `mcp__codex_apps__github_update_pull_request`
- `mcp__codex_apps__github_update_ref`
- `mcp__codex_apps__github_update_review_comment`

## gmail

- `mcp__codex_apps__gmail_apply_labels_to_emails`
- `mcp__codex_apps__gmail_archive_emails`
- `mcp__codex_apps__gmail_batch_modify_email`
- `mcp__codex_apps__gmail_batch_read_email`
- `mcp__codex_apps__gmail_batch_read_email_threads`
- `mcp__codex_apps__gmail_bulk_label_matching_emails`
- `mcp__codex_apps__gmail_create_draft`
- `mcp__codex_apps__gmail_create_label`
- `mcp__codex_apps__gmail_delete_emails`
- `mcp__codex_apps__gmail_forward_emails`
- `mcp__codex_apps__gmail_get_profile`
- `mcp__codex_apps__gmail_list_drafts`
- `mcp__codex_apps__gmail_list_labels`
- `mcp__codex_apps__gmail_read_attachment`
- `mcp__codex_apps__gmail_read_email`
- `mcp__codex_apps__gmail_read_email_thread`
- `mcp__codex_apps__gmail_search_email_ids`
- `mcp__codex_apps__gmail_search_emails`
- `mcp__codex_apps__gmail_send_draft`
- `mcp__codex_apps__gmail_send_email`
- `mcp__codex_apps__gmail_update_draft`

## google

- `mcp__codex_apps__google_calendar_batch_read_event`
- `mcp__codex_apps__google_calendar_create_event`
- `mcp__codex_apps__google_calendar_delete_event`
- `mcp__codex_apps__google_calendar_fetch`
- `mcp__codex_apps__google_calendar_get_availability`
- `mcp__codex_apps__google_calendar_get_colors`
- `mcp__codex_apps__google_calendar_get_profile`
- `mcp__codex_apps__google_calendar_list_calendars`
- `mcp__codex_apps__google_calendar_list_event_labels`
- `mcp__codex_apps__google_calendar_read_event`
- `mcp__codex_apps__google_calendar_respond_event`
- `mcp__codex_apps__google_calendar_search`
- `mcp__codex_apps__google_calendar_search_events`
- `mcp__codex_apps__google_calendar_set_event_label_silently`
- `mcp__codex_apps__google_calendar_update_event`
- `mcp__codex_apps__google_drive_batch_update_document`
- `mcp__codex_apps__google_drive_batch_update_presentation`
- `mcp__codex_apps__google_drive_batch_update_spreadsheet`
- `mcp__codex_apps__google_drive_bulk_update_file_comments`
- `mcp__codex_apps__google_drive_copy_file`
- `mcp__codex_apps__google_drive_create_file`
- `mcp__codex_apps__google_drive_create_folder`
- `mcp__codex_apps__google_drive_create_presentation_from_template`
- `mcp__codex_apps__google_drive_delete_file`
- `mcp__codex_apps__google_drive_duplicate_sheet_in_new_spreadsheet`
- `mcp__codex_apps__google_drive_export_file`
- `mcp__codex_apps__google_drive_fetch`
- `mcp__codex_apps__google_drive_fetch_file_revision`
- `mcp__codex_apps__google_drive_find_document_text_range`
- `mcp__codex_apps__google_drive_get_document`
- `mcp__codex_apps__google_drive_get_document_comments`
- `mcp__codex_apps__google_drive_get_document_paragraph_range`
- `mcp__codex_apps__google_drive_get_document_tables`
- `mcp__codex_apps__google_drive_get_document_text`
- `mcp__codex_apps__google_drive_get_file_comments`
- `mcp__codex_apps__google_drive_get_file_metadata`
- `mcp__codex_apps__google_drive_get_presentation`
- `mcp__codex_apps__google_drive_get_presentation_comments`
- `mcp__codex_apps__google_drive_get_presentation_outline`
- `mcp__codex_apps__google_drive_get_presentation_tables`
- `mcp__codex_apps__google_drive_get_presentation_text`
- `mcp__codex_apps__google_drive_get_profile`
- `mcp__codex_apps__google_drive_get_slide`
- `mcp__codex_apps__google_drive_get_slide_thumbnail`
- `mcp__codex_apps__google_drive_get_spreadsheet_cells`
- `mcp__codex_apps__google_drive_get_spreadsheet_comments`
- `mcp__codex_apps__google_drive_get_spreadsheet_metadata`
- `mcp__codex_apps__google_drive_get_spreadsheet_range`
- `mcp__codex_apps__google_drive_import_document`
- `mcp__codex_apps__google_drive_import_presentation`
- `mcp__codex_apps__google_drive_import_spreadsheet`
- `mcp__codex_apps__google_drive_list_drives`
- `mcp__codex_apps__google_drive_list_file_revisions`
- `mcp__codex_apps__google_drive_list_folder`
- `mcp__codex_apps__google_drive_recent_documents`
- `mcp__codex_apps__google_drive_search`
- `mcp__codex_apps__google_drive_search_spreadsheet_rows`
- `mcp__codex_apps__google_drive_share_file`
- `mcp__codex_apps__google_drive_update_file`
- `mcp__codex_apps__google_drive_upload_file`

## hotline

- `mcp__codex_apps__hotline_get_local_hotline`

## linear

- `mcp__codex_apps__linear_create_attachment`
- `mcp__codex_apps__linear_create_attachment_from_upload`
- `mcp__codex_apps__linear_create_initiative_label`
- `mcp__codex_apps__linear_create_issue_label`
- `mcp__codex_apps__linear_delete_attachment`
- `mcp__codex_apps__linear_delete_comment`
- `mcp__codex_apps__linear_delete_customer`
- `mcp__codex_apps__linear_delete_customer_need`
- `mcp__codex_apps__linear_delete_diff_comment`
- `mcp__codex_apps__linear_delete_status_update`
- `mcp__codex_apps__linear_extract_images`
- `mcp__codex_apps__linear_fetch`
- `mcp__codex_apps__linear_get_agent_skill`
- `mcp__codex_apps__linear_get_attachment`
- `mcp__codex_apps__linear_get_diff`
- `mcp__codex_apps__linear_get_diff_threads`
- `mcp__codex_apps__linear_get_document`
- `mcp__codex_apps__linear_get_initiative`
- `mcp__codex_apps__linear_get_issue`
- `mcp__codex_apps__linear_get_issue_status`
- `mcp__codex_apps__linear_get_milestone`
- `mcp__codex_apps__linear_get_notifications`
- `mcp__codex_apps__linear_get_project`
- `mcp__codex_apps__linear_get_release`
- `mcp__codex_apps__linear_get_release_note`
- `mcp__codex_apps__linear_get_status_updates`
- `mcp__codex_apps__linear_get_team`
- `mcp__codex_apps__linear_get_template`
- `mcp__codex_apps__linear_get_user`
- `mcp__codex_apps__linear_get_workspace`
- `mcp__codex_apps__linear_list_agent_skills`
- `mcp__codex_apps__linear_list_comments`
- `mcp__codex_apps__linear_list_customers`
- `mcp__codex_apps__linear_list_cycles`
- `mcp__codex_apps__linear_list_diffs`
- `mcp__codex_apps__linear_list_documents`
- `mcp__codex_apps__linear_list_initiative_labels`
- `mcp__codex_apps__linear_list_initiatives`
- `mcp__codex_apps__linear_list_issue_labels`
- `mcp__codex_apps__linear_list_issue_statuses`
- `mcp__codex_apps__linear_list_issues`
- `mcp__codex_apps__linear_list_milestones`
- `mcp__codex_apps__linear_list_project_labels`
- `mcp__codex_apps__linear_list_projects`
- `mcp__codex_apps__linear_list_release_notes`
- `mcp__codex_apps__linear_list_release_pipelines`
- `mcp__codex_apps__linear_list_releases`
- `mcp__codex_apps__linear_list_teams`
- `mcp__codex_apps__linear_list_templates`
- `mcp__codex_apps__linear_list_users`
- `mcp__codex_apps__linear_mark_notification`
- `mcp__codex_apps__linear_merge_diff`
- `mcp__codex_apps__linear_prepare_attachment_upload`
- `mcp__codex_apps__linear_resolve_diff_thread`
- `mcp__codex_apps__linear_save_comment`
- `mcp__codex_apps__linear_save_customer`
- `mcp__codex_apps__linear_save_customer_need`
- `mcp__codex_apps__linear_save_diff_comment`
- `mcp__codex_apps__linear_save_document`
- `mcp__codex_apps__linear_save_initiative`
- `mcp__codex_apps__linear_save_initiative_label`
- `mcp__codex_apps__linear_save_issue`
- `mcp__codex_apps__linear_save_issue_label`
- `mcp__codex_apps__linear_save_milestone`
- `mcp__codex_apps__linear_save_project`
- `mcp__codex_apps__linear_save_project_label`
- `mcp__codex_apps__linear_save_release`
- `mcp__codex_apps__linear_save_release_note`
- `mcp__codex_apps__linear_save_status_update`
- `mcp__codex_apps__linear_search`
- `mcp__codex_apps__linear_search_documentation`
- `mcp__codex_apps__linear_share_issue`
- `mcp__codex_apps__linear_submit_diff_review`
- `mcp__codex_apps__linear_unshare_issue`

## lovable

- `mcp__codex_apps__lovable_add_connector`
- `mcp__codex_apps__lovable_create_project`
- `mcp__codex_apps__lovable_create_workspace_skill`
- `mcp__codex_apps__lovable_delete_workspace_skill`
- `mcp__codex_apps__lovable_deploy_project`
- `mcp__codex_apps__lovable_enable_database`
- `mcp__codex_apps__lovable_get_database_status`
- `mcp__codex_apps__lovable_get_diff`
- `mcp__codex_apps__lovable_get_file_upload_url`
- `mcp__codex_apps__lovable_get_me`
- `mcp__codex_apps__lovable_get_message`
- `mcp__codex_apps__lovable_get_project`
- `mcp__codex_apps__lovable_get_project_analytics`
- `mcp__codex_apps__lovable_get_project_analytics_trend`
- `mcp__codex_apps__lovable_get_project_knowledge`
- `mcp__codex_apps__lovable_get_workspace`
- `mcp__codex_apps__lovable_get_workspace_knowledge`
- `mcp__codex_apps__lovable_get_workspace_skill`
- `mcp__codex_apps__lovable_initiate_project`
- `mcp__codex_apps__lovable_list_connectors`
- `mcp__codex_apps__lovable_list_custom_connectors`
- `mcp__codex_apps__lovable_list_design_systems`
- `mcp__codex_apps__lovable_list_edits`
- `mcp__codex_apps__lovable_list_files`
- `mcp__codex_apps__lovable_list_messages`
- `mcp__codex_apps__lovable_list_projects`
- `mcp__codex_apps__lovable_list_template_projects`
- `mcp__codex_apps__lovable_list_workspace_skills`
- `mcp__codex_apps__lovable_list_workspaces`
- `mcp__codex_apps__lovable_move_projects_to_folder`
- `mcp__codex_apps__lovable_query_database`
- `mcp__codex_apps__lovable_read_file`
- `mcp__codex_apps__lovable_remix_project`
- `mcp__codex_apps__lovable_render_project_widget`
- `mcp__codex_apps__lovable_send_message`
- `mcp__codex_apps__lovable_set_folder_visibility`
- `mcp__codex_apps__lovable_set_project_knowledge`
- `mcp__codex_apps__lovable_set_project_visibility`
- `mcp__codex_apps__lovable_set_workspace_knowledge`
- `mcp__codex_apps__lovable_update_workspace_skill`

## node_repl

- `mcp__node_repl__js`
- `mcp__node_repl__js_add_node_module_dir`
- `mcp__node_repl__js_reset`

## openai_artifact_template_picker

- `mcp__openai_artifact_template_picker__choose_artifact_template`
- `mcp__openai_artifact_template_picker__list_artifact_templates`

## plugin

- `mcp__codex_apps__plugin_management_get_app_permissions`
- `mcp__codex_apps__plugin_management_get_plugin_dependencies`
- `mcp__codex_apps__plugin_management_search_plugins`
- `mcp__codex_apps__plugin_management_suggest_plugins`
- `mcp__codex_apps__plugin_management_uninstall_app`
- `mcp__codex_apps__plugin_management_update_app_permissions`

## safety

- `mcp__codex_apps__safety_settings_get_family_info`
- `mcp__codex_apps__safety_settings_get_parental_controls`
- `mcp__codex_apps__safety_settings_get_trusted_contact`
- `mcp__codex_apps__safety_settings_prepare_parental_control_update`
- `mcp__codex_apps__safety_settings_update_parental_control`

## sites

- `mcp__codex_apps__sites_add_custom_domain`
- `mcp__codex_apps__sites_change_site_slug`
- `mcp__codex_apps__sites_create_site`
- `mcp__codex_apps__sites_create_source_repository_write_credential`
- `mcp__codex_apps__sites_deploy_private_site_version`
- `mcp__codex_apps__sites_deploy_site_version`
- `mcp__codex_apps__sites_generate_siwc_bypass_token`
- `mcp__codex_apps__sites_get_deployment_status`
- `mcp__codex_apps__sites_get_environment_variables`
- `mcp__codex_apps__sites_get_site`
- `mcp__codex_apps__sites_get_site_version`
- `mcp__codex_apps__sites_get_site_worker_logs`
- `mcp__codex_apps__sites_list_custom_domains`
- `mcp__codex_apps__sites_list_site_versions`
- `mcp__codex_apps__sites_list_sites`
- `mcp__codex_apps__sites_read_database_overview`
- `mcp__codex_apps__sites_read_database_table_rows`
- `mcp__codex_apps__sites_refresh_custom_domain_status`
- `mcp__codex_apps__sites_remove_custom_domain`
- `mcp__codex_apps__sites_save_site_version`
- `mcp__codex_apps__sites_update_environment_variables`
- `mcp__codex_apps__sites_update_site_access`
- `mcp__codex_apps__sites_update_site_metadata`

## windsor

- `mcp__codex_apps__windsor_ai_contact_windsor`
- `mcp__codex_apps__windsor_ai_create_custom_field`
- `mcp__codex_apps__windsor_ai_create_destination_task`
- `mcp__codex_apps__windsor_ai_execute_action`
- `mcp__codex_apps__windsor_ai_get_connector_authorization_url`
- `mcp__codex_apps__windsor_ai_get_connector_connect_info`
- `mcp__codex_apps__windsor_ai_get_connectors`
- `mcp__codex_apps__windsor_ai_get_current_user`
- `mcp__codex_apps__windsor_ai_get_custom_fields`
- `mcp__codex_apps__windsor_ai_get_data`
- `mcp__codex_apps__windsor_ai_get_destination_setup_info`
- `mcp__codex_apps__windsor_ai_get_destination_tasks`
- `mcp__codex_apps__windsor_ai_get_destinations`
- `mcp__codex_apps__windsor_ai_get_fields`
- `mcp__codex_apps__windsor_ai_get_options`
- `mcp__codex_apps__windsor_ai_get_windsor_login_url`
- `mcp__codex_apps__windsor_ai_list_actions`

## Interfaces adicionais

Também disponíveis: navegador por cua_repl, colaboração entre agentes, perguntas ao usuário e relógio. Não foram usados agentes paralelos.

