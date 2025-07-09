import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Debug logs to verify environment variables
console.log('🔍 Supabase Configuration Debug:')
console.log('VITE_SUPABASE_URL:', supabaseUrl)
console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'undefined')
console.log('Environment variables loaded:', {
  url: !!supabaseUrl,
  key: !!supabaseAnonKey
})

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables!')
  console.error('Please check your .env file contains:')
  console.error('VITE_SUPABASE_URL=your_supabase_url')
  console.error('VITE_SUPABASE_ANON_KEY=your_supabase_anon_key')
  throw new Error('Missing Supabase environment variables')
}

console.log('✅ Creating Supabase client...')
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          full_name: string | null
          avatar_url: string | null
          role: 'admin' | 'manager' | 'staff'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'admin' | 'manager' | 'staff'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'admin' | 'manager' | 'staff'
          created_at?: string
          updated_at?: string
        }
      }
      merchants: {
        Row: {
          id: string
          business_name: string
          business_type: string
          contact_email: string
          status: 'pending' | 'active' | 'suspended' | 'inactive'
          created_at: string
          updated_at: string
          ein: string | null
          business_address: any | null
          contact_phone: string | null
          payroll_settings: any | null
          tax_settings: any | null
          equipment_types: any | null
          pricing_model_inputs: any | null
          principal_information: any | null
          banking_information: any | null
          document_attachments: any | null
        }
        Insert: {
          id?: string
          business_name: string
          business_type: string
          contact_email: string
          status?: 'pending' | 'active' | 'suspended' | 'inactive'
          created_at?: string
          updated_at?: string
          ein?: string | null
          business_address?: any | null
          contact_phone?: string | null
          payroll_settings?: any | null
          tax_settings?: any | null
          equipment_types?: any | null
          pricing_model_inputs?: any | null
          principal_information?: any | null
          banking_information?: any | null
          document_attachments?: any | null
        }
        Update: {
          id?: string
          business_name?: string
          business_type?: string
          contact_email?: string
          status?: 'pending' | 'active' | 'suspended' | 'inactive'
          created_at?: string
          updated_at?: string
          ein?: string | null
          business_address?: any | null
          contact_phone?: string | null
          payroll_settings?: any | null
          tax_settings?: any | null
          equipment_types?: any | null
          pricing_model_inputs?: any | null
          principal_information?: any | null
          banking_information?: any | null
          document_attachments?: any | null
        }
      }
      employees: {
        Row: {
          id: string
          company_id: string
          employee_number: string
          personal_info: any | null
          contact_info: any | null
          employment_info: any | null
          tax_info: any | null
          payment_method: any | null
          status: 'active' | 'inactive' | 'terminated'
          created_at: string
          updated_at: string
          location_id: string | null
          wallet_id: string | null
        }
        Insert: {
          id: string
          company_id: string
          employee_number: string
          personal_info?: any | null
          contact_info?: any | null
          employment_info?: any | null
          tax_info?: any | null
          payment_method?: any | null
          status?: 'active' | 'inactive' | 'terminated'
          created_at?: string
          updated_at?: string
          location_id?: string | null
          wallet_id?: string | null
        }
        Update: {
          id?: string
          company_id?: string
          employee_number?: string
          personal_info?: any | null
          contact_info?: any | null
          employment_info?: any | null
          tax_info?: any | null
          payment_method?: any | null
          status?: 'active' | 'inactive' | 'terminated'
          created_at?: string
          updated_at?: string
          location_id?: string | null
          wallet_id?: string | null
        }
      }
      locations: {
        Row: {
          id: string
          company_id: string
          name: string
          address: any | null
          contact_phone: string | null
          manager_id: string | null
          status: 'active' | 'inactive' | 'under_construction' | 'temporarily_closed'
          settings: any | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          name: string
          address?: any | null
          contact_phone?: string | null
          manager_id?: string | null
          status?: 'active' | 'inactive' | 'under_construction' | 'temporarily_closed'
          settings?: any | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          name?: string
          address?: any | null
          contact_phone?: string | null
          manager_id?: string | null
          status?: 'active' | 'inactive' | 'under_construction' | 'temporarily_closed'
          settings?: any | null
          created_at?: string
          updated_at?: string
        }
      }
      time_entries: {
        Row: {
          id: string
          employee_id: string
          company_id: string
          work_date: string
          clock_in: string | null
          clock_out: string | null
          break_minutes: number | null
          regular_hours: number | null
          overtime_hours: number | null
          entry_type: 'manual' | 'imported' | 'clock'
          notes: string | null
          approved_by: string | null
          approved_at: string | null
          created_at: string
          updated_at: string
          location_id: string | null
        }
        Insert: {
          id?: string
          employee_id: string
          company_id: string
          work_date: string
          clock_in?: string | null
          clock_out?: string | null
          break_minutes?: number | null
          regular_hours?: number | null
          overtime_hours?: number | null
          entry_type?: 'manual' | 'imported' | 'clock'
          notes?: string | null
          approved_by?: string | null
          approved_at?: string | null
          created_at?: string
          updated_at?: string
          location_id?: string | null
        }
        Update: {
          id?: string
          employee_id?: string
          company_id?: string
          work_date?: string
          clock_in?: string | null
          clock_out?: string | null
          break_minutes?: number | null
          regular_hours?: number | null
          overtime_hours?: number | null
          entry_type?: 'manual' | 'imported' | 'clock'
          notes?: string | null
          approved_by?: string | null
          approved_at?: string | null
          created_at?: string
          updated_at?: string
          location_id?: string | null
        }
      }
      wallets: {
        Row: {
          id: string
          user_id: string | null
          balance: number | null
          type: 'parent_child' | 'employer_employee' | 'personal' | 'business'
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          balance?: number | null
          type: 'parent_child' | 'employer_employee' | 'personal' | 'business'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          balance?: number | null
          type?: 'parent_child' | 'employer_employee' | 'personal' | 'business'
          created_at?: string
        }
      }
      wallet_transactions: {
        Row: {
          id: string
          wallet_id: string
          transaction_type: 'deposit' | 'withdrawal' | 'payment' | 'refund' | 'transfer' | 'fee'
          amount: number
          status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled'
          description: string | null
          related_entity_type: string | null
          related_entity_id: string | null
          reference_number: string | null
          metadata: any | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          wallet_id: string
          transaction_type: 'deposit' | 'withdrawal' | 'payment' | 'refund' | 'transfer' | 'fee'
          amount: number
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled'
          description?: string | null
          related_entity_type?: string | null
          related_entity_id?: string | null
          reference_number?: string | null
          metadata?: any | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          wallet_id?: string
          transaction_type?: 'deposit' | 'withdrawal' | 'payment' | 'refund' | 'transfer' | 'fee'
          amount?: number
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled'
          description?: string | null
          related_entity_type?: string | null
          related_entity_id?: string | null
          reference_number?: string | null
          metadata?: any | null
          created_at?: string
          updated_at?: string
        }
      }
      payment_transactions: {
        Row: {
          id: string
          paystub_id: string
          employee_id: string
          company_id: string
          amount: number
          payment_method: 'ach' | 'wire' | 'digital_wallet' | 'check'
          payment_reference: string | null
          wallet_transaction_id: string | null
          status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled'
          processed_at: string | null
          created_at: string
          updated_at: string
          location_id: string | null
        }
        Insert: {
          id?: string
          paystub_id: string
          employee_id: string
          company_id: string
          amount: number
          payment_method: 'ach' | 'wire' | 'digital_wallet' | 'check'
          payment_reference?: string | null
          wallet_transaction_id?: string | null
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled'
          processed_at?: string | null
          created_at?: string
          updated_at?: string
          location_id?: string | null
        }
        Update: {
          id?: string
          paystub_id?: string
          employee_id?: string
          company_id?: string
          amount?: number
          payment_method?: 'ach' | 'wire' | 'digital_wallet' | 'check'
          payment_reference?: string | null
          wallet_transaction_id?: string | null
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled'
          processed_at?: string | null
          created_at?: string
          updated_at?: string
          location_id?: string | null
        }
      }
      pay_schedules: {
        Row: {
          id: string
          company_id: string
          schedule_name: string
          frequency: 'weekly' | 'biweekly' | 'semimonthly' | 'monthly'
          start_date: string
          next_pay_date: string
          pay_day_of_week: number | null
          pay_dates: any | null
          is_active: boolean | null
          created_at: string
          updated_at: string
          location_id: string | null
        }
        Insert: {
          id?: string
          company_id: string
          schedule_name: string
          frequency: 'weekly' | 'biweekly' | 'semimonthly' | 'monthly'
          start_date: string
          next_pay_date: string
          pay_day_of_week?: number | null
          pay_dates?: any | null
          is_active?: boolean | null
          created_at?: string
          updated_at?: string
          location_id?: string | null
        }
        Update: {
          id?: string
          company_id?: string
          schedule_name?: string
          frequency?: 'weekly' | 'biweekly' | 'semimonthly' | 'monthly'
          start_date?: string
          next_pay_date?: string
          pay_day_of_week?: number | null
          pay_dates?: any | null
          is_active?: boolean | null
          created_at?: string
          updated_at?: string
          location_id?: string | null
        }
      }
      pay_runs: {
        Row: {
          id: string
          company_id: string
          schedule_id: string
          pay_period_start: string
          pay_period_end: string
          pay_date: string
          status: 'draft' | 'processing' | 'completed' | 'failed' | 'cancelled'
          totals: any | null
          tax_engine_version: string | null
          processed_by: string | null
          processed_at: string | null
          created_at: string
          updated_at: string
          location_id: string | null
        }
        Insert: {
          id?: string
          company_id: string
          schedule_id: string
          pay_period_start: string
          pay_period_end: string
          pay_date: string
          status?: 'draft' | 'processing' | 'completed' | 'failed' | 'cancelled'
          totals?: any | null
          tax_engine_version?: string | null
          processed_by?: string | null
          processed_at?: string | null
          created_at?: string
          updated_at?: string
          location_id?: string | null
        }
        Update: {
          id?: string
          company_id?: string
          schedule_id?: string
          pay_period_start?: string
          pay_period_end?: string
          pay_date?: string
          status?: 'draft' | 'processing' | 'completed' | 'failed' | 'cancelled'
          totals?: any | null
          tax_engine_version?: string | null
          processed_by?: string | null
          processed_at?: string | null
          created_at?: string
          updated_at?: string
          location_id?: string | null
        }
      }
      paystubs: {
        Row: {
          id: string
          payrun_id: string
          employee_id: string
          company_id: string
          pay_period_start: string
          pay_period_end: string
          pay_date: string
          earnings: any | null
          taxes: any | null
          deductions: any | null
          net_pay: number
          ytd_totals: any | null
          pdf_url: string | null
          status: 'generated' | 'sent' | 'viewed'
          created_at: string
          updated_at: string
          location_id: string | null
        }
        Insert: {
          id?: string
          payrun_id: string
          employee_id: string
          company_id: string
          pay_period_start: string
          pay_period_end: string
          pay_date: string
          earnings?: any | null
          taxes?: any | null
          deductions?: any | null
          net_pay?: number
          ytd_totals?: any | null
          pdf_url?: string | null
          status?: 'generated' | 'sent' | 'viewed'
          created_at?: string
          updated_at?: string
          location_id?: string | null
        }
        Update: {
          id?: string
          payrun_id?: string
          employee_id?: string
          company_id?: string
          pay_period_start?: string
          pay_period_end?: string
          pay_date?: string
          earnings?: any | null
          taxes?: any | null
          deductions?: any | null
          net_pay?: number
          ytd_totals?: any | null
          pdf_url?: string | null
          status?: 'generated' | 'sent' | 'viewed'
          created_at?: string
          updated_at?: string
          location_id?: string | null
        }
      }
      audit_logs: {
        Row: {
          id: string
          company_id: string | null
          user_id: string | null
          action: string
          entity_type: string | null
          entity_id: string | null
          old_values: any | null
          new_values: any | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
          location_id: string | null
        }
        Insert: {
          id?: string
          company_id?: string | null
          user_id?: string | null
          action: string
          entity_type?: string | null
          entity_id?: string | null
          old_values?: any | null
          new_values?: any | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
          location_id?: string | null
        }
        Update: {
          id?: string
          company_id?: string | null
          user_id?: string | null
          action?: string
          entity_type?: string | null
          entity_id?: string | null
          old_values?: any | null
          new_values?: any | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
          location_id?: string | null
        }
      }
      tax_filing_records: {
        Row: {
          id: string
          company_id: string
          form_type: '941' | 'w2' | 'state_quarterly' | 'local'
          filing_period: string
          due_date: string
          filed_date: string | null
          status: 'pending' | 'filed' | 'overdue' | 'amended'
          filing_data: any | null
          created_at: string
          updated_at: string
          location_id: string | null
        }
        Insert: {
          id?: string
          company_id: string
          form_type: '941' | 'w2' | 'state_quarterly' | 'local'
          filing_period: string
          due_date: string
          filed_date?: string | null
          status?: 'pending' | 'filed' | 'overdue' | 'amended'
          filing_data?: any | null
          created_at?: string
          updated_at?: string
          location_id?: string | null
        }
        Update: {
          id?: string
          company_id?: string
          form_type?: '941' | 'w2' | 'state_quarterly' | 'local'
          filing_period?: string
          due_date?: string
          filed_date?: string | null
          status?: 'pending' | 'filed' | 'overdue' | 'amended'
          filing_data?: any | null
          created_at?: string
          updated_at?: string
          location_id?: string | null
        }
      }
      service_subscriptions: {
        Row: {
          id: string
          merchant_id: string | null
          service_name: string
          price: number
          status: 'active' | 'inactive' | 'pending'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          merchant_id?: string | null
          service_name: string
          price: number
          status?: 'active' | 'inactive' | 'pending'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          merchant_id?: string | null
          service_name?: string
          price?: number
          status?: 'active' | 'inactive' | 'pending'
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          merchant_id: string
          total: number
          status: 'pending' | 'paid' | 'failed'
          source: string | null
          created_at: string
          location_id: string | null
        }
        Insert: {
          id?: string
          merchant_id: string
          total: number
          status: 'pending' | 'paid' | 'failed'
          source?: string | null
          created_at?: string
          location_id?: string | null
        }
        Update: {
          id?: string
          merchant_id?: string
          total?: number
          status?: 'pending' | 'paid' | 'failed'
          source?: string | null
          created_at?: string
          location_id?: string | null
        }
      }
      deduction_types: {
        Row: {
          id: string
          company_id: string | null
          name: string
          category: 'tax' | 'retirement' | 'insurance' | 'garnishment' | 'other'
          calculation_type: 'fixed_amount' | 'percentage' | 'tiered'
          is_pre_tax: boolean | null
          is_active: boolean | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id?: string | null
          name: string
          category: 'tax' | 'retirement' | 'insurance' | 'garnishment' | 'other'
          calculation_type: 'fixed_amount' | 'percentage' | 'tiered'
          is_pre_tax?: boolean | null
          is_active?: boolean | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string | null
          name?: string
          category?: 'tax' | 'retirement' | 'insurance' | 'garnishment' | 'other'
          calculation_type?: 'fixed_amount' | 'percentage' | 'tiered'
          is_pre_tax?: boolean | null
          is_active?: boolean | null
          created_at?: string
          updated_at?: string
        }
      }
      employee_deductions: {
        Row: {
          id: string
          employee_id: string
          deduction_type_id: string
          amount: number | null
          percentage: number | null
          max_amount: number | null
          effective_date: string
          end_date: string | null
          is_active: boolean | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          employee_id: string
          deduction_type_id: string
          amount?: number | null
          percentage?: number | null
          max_amount?: number | null
          effective_date: string
          end_date?: string | null
          is_active?: boolean | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          employee_id?: string
          deduction_type_id?: string
          amount?: number | null
          percentage?: number | null
          max_amount?: number | null
          effective_date?: string
          end_date?: string | null
          is_active?: boolean | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
